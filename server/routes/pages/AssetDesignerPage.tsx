import styled from "@emotion/styled";
import { Color, WidthProperty } from "csstype";
import domToImage from "dom-to-image";
import { saveAs } from "file-saver";
import createHistory from "history/createBrowserHistory";
import map from "lodash/map";
import queryString from "query-string";
import * as React from "react";
import { Theme } from "../../schema/Theme";
import * as components from "../components";
import connect from "../components/connect";
import Select from "../components/Select";
import * as templates from "../templates";

interface AssetDesignerContainerProps {
  width: WidthProperty<string>;
}

const AssetDesignerContainer = styled.article`
  display: grid;
  grid-template-columns: ${({ width }) => width} 1fr;
  align-items: center;
` as React.FC<AssetDesignerContainerProps>;

interface SidebarProps {
  backgroundColor: Color;
}

const Sidebar = styled.aside`
  padding: 1em;
  vertical-align: top;
  height: 100vh;
  position: sticky;
  background-color: ${({ backgroundColor }) => backgroundColor};
` as React.FC<SidebarProps>;
const SidebarHeader = styled.h2``;
const SidebarItem = styled.div`
  margin-bottom: 1em;
`;

const Main = styled.main`
  overflow: auto;
  margin: auto;
`;

const ExportButton = styled.button``;

const VariableContainer = styled.div``;

// TODO: Share the type from the backend
interface DesignerState {
  selected: {
    conferenceSeriesId: string;
    conferenceId: string;
    selectionId: string; // One of templates
  };
  variables: { [key: string]: any };
}

enum ActionTypes {
  UPDATE_SELECTED,
  UPDATE_VARIABLE,
}

// TODO: Fetch new data
function assetDesignerReducer(state: DesignerState, action) {
  const { field, value } = action;

  switch (action.type) {
    case ActionTypes.UPDATE_SELECTED:
      updateQuery(field, value);

      return { ...state, selected: { ...state.selected, [field]: value } };
    case ActionTypes.UPDATE_VARIABLE:
      updateQuery(field, value);

      return { ...state, variables: { ...state.variables, [field]: value } };
    default:
      throw new Error("No matching reducer found!");
  }
}

function updateQuery(field: string, value: string) {
  const history = createHistory();
  const query = queryString.stringify({
    ...queryString.parse(location.search),
    [field]: value,
  });
  history.push(`?${query}`);
}

interface AssetDesignerPageProps {
  initialState: DesignerState;
  themes: Theme[];
}

function AssetDesignerPage({
  initialState = {
    selected: {
      conferenceId: "",
      conferenceSeriesId: "",
      selectionId: "",
    },
    variables: {},
  },
  themes,
}: AssetDesignerPageProps) {
  const [state, dispatch] = React.useReducer(
    assetDesignerReducer,
    initialState
  );
  const { conferenceSeriesId, selectionId } = state.selected;
  const theme = themes.find(({ id }) => conferenceSeriesId === id);

  // TODO: Type
  const selection =
    templates[selectionId] || components[selectionId] || NoSelectionFound;
  const variables = selection.variables
    ? selection.variables.map(variable => ({
        ...variable,
        value: state[variable.id],
      }))
    : []; // TODO: Overlay to selection
  const sideBarWidth = "18em";
  const assetDesignTemplateId = "asset-design-template-id";

  // TODO: Construct variables based on this metadata
  // Likely this should be named as variables as well and use
  // the same shape (no need to do a separate system)
  // console.log("attendee", selection.props.attendee._fields);

  return (
    <AssetDesignerContainer width={sideBarWidth}>
      <Sidebar backgroundColor={theme ? theme.colors.background : ""}>
        <SidebarHeader>Asset designer</SidebarHeader>

        <SidebarItem>
          <ExportButton
            onClick={() => {
              const domNode = document.getElementById(assetDesignTemplateId);

              if (domNode) {
                domToImage
                  .toBlob(domNode)
                  .then(blob => {
                    // TODO: Improve this further (i.e. name of the speaker for tweets etc.)
                    saveAs(blob, `${selection.filename}.png`);
                  })
                  .catch(err => console.error(err));
              }
            }}
          >
            Export Image
          </ExportButton>
        </SidebarItem>

        <SidebarItem>
          <SidebarHeader>Themes</SidebarHeader>
          <ThemeSelector
            themes={themes}
            selectedTheme={state.selected.conferenceSeriesId}
            onChange={(field, value) =>
              dispatch({ type: ActionTypes.UPDATE_SELECTED, field, value })
            }
          />
        </SidebarItem>

        <SidebarItem>
          <SidebarHeader>Templates</SidebarHeader>
          <ComponentSelector
            templates={Object.keys(templates)}
            selectedTemplate={state.selected.selectionId}
          />
        </SidebarItem>

        <SidebarItem>
          <SidebarHeader>Components</SidebarHeader>
          <ComponentSelector
            templates={Object.keys(components)}
            selectedTemplate={state.selected.selectionId}
          />
        </SidebarItem>

        {variables.length > 0 && (
          <SidebarItem>
            <SidebarHeader>Variables</SidebarHeader>

            {map(variables, variable => (
              <VariableContainer key={variable.id}>
                <VariableSelector
                  selected={state.variables}
                  field={variable.id}
                  selectedVariable={variable.value}
                  query={variable.query}
                  mapToCollection={variable.mapToCollection}
                  mapToOption={variable.mapToOption}
                  validation={variable.validation}
                  onChange={(field, value) =>
                    dispatch({
                      type: ActionTypes.UPDATE_VARIABLE,
                      field,
                      value,
                    })
                  }
                />
              </VariableContainer>
            ))}
          </SidebarItem>
        )}
      </Sidebar>
      <Main>
        {React.createElement(selection, {
          ...state.variables,
          selected: state.selected,
          theme,
          id: assetDesignTemplateId,
        })}
      </Main>
    </AssetDesignerContainer>
  );
}

function NoSelectionFound() {
  return <>No selection found!</>;
}

interface ThemeSelectorProps {
  themes: Theme[];
  selectedTheme: Theme["id"];
  onChange: (field: string, value: string) => void;
}

function ThemeSelector({
  themes,
  selectedTheme,
  onChange,
}: ThemeSelectorProps) {
  return (
    <Select
      options={
        themes
          ? themes.map(theme => ({
              value: theme.id,
              label: theme.id,
            }))
          : []
      }
      selected={selectedTheme}
      onChange={({ target: { value } }) => {
        onChange("conferenceSeriesId", value);
      }}
    />
  );
}

interface ComponentSelectorProps {
  templates: string[];
  selectedTemplate: string;
}

const ComponentSelectorContainer = styled.div``;
const ComponentSelectorSelectedOption = styled.div``;
const ComponentSelectorOption = styled.a`
  display: block;
`;

// TODO: Likely this should run through local state like the
// other bits
function ComponentSelector({
  templates,
  selectedTemplate,
}: ComponentSelectorProps) {
  return (
    <ComponentSelectorContainer>
      {templates.map(templateId =>
        templateId === selectedTemplate ? (
          <ComponentSelectorSelectedOption key={templateId}>
            {templateId}
          </ComponentSelectorSelectedOption>
        ) : (
          <ComponentSelectorOption
            key={templateId}
            href="#"
            onClick={e => {
              e.preventDefault();

              const search = queryString.parse(location.search);

              // Retain only conferenceSeriesId + replace selectionId.
              // Otherwise selection might be invalid.
              location.search = queryString.stringify({
                selected: JSON.stringify({
                  conferenceSeriesId: search.conferenceSeriesId,
                  selectionId: templateId,
                }),
              });
            }}
          >
            {templateId}
          </ComponentSelectorOption>
        )
      )}
    </ComponentSelectorContainer>
  );
}

interface VariableSelector {
  selected: AssetDesignerPageProps["initialState"]["variables"];
  field: string;
  options: string[];
  selectedVariable: string;
  query: string;
  // TODO: Use the same type as in connect
  mapToCollection: (result: any) => any;
  mapToOption: (result: any) => { value: any; label: any };
  validation: { type: any; default: string };
  onChange: (field: string, value: string) => void;
}

// TODO: This should handle labels as well
function VariableSelector({
  selected,
  field,
  selectedVariable,
  query,
  mapToCollection,
  mapToOption,
  validation,
  onChange,
}) {
  if (!query) {
    return (
      <VariableFields
        field={field}
        validation={validation}
        selectedVariable={selectedVariable}
        onChange={onChange}
      />
    );
  }

  const ConnectedSelect = connect(
    "/graphql",
    query,
    selected
  )(result => {
    const collection = mapToCollection(result);

    return (
      <Select
        width="100%"
        options={
          collection
            ? [{ value: "", label: "" }].concat(collection.map(mapToOption))
            : []
        }
        selected={selectedVariable}
        onChange={({ target: { value } }) => {
          onChange(field, value);
        }}
      />
    );
  });

  return <ConnectedSelect />;
}

const SelectorLabel = styled.label`
  margin-right: 1em;
`;
const SelectorInput = styled.input`
  width: 100%;
`;
const SelectorContainer = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
`;

function VariableFields({ validation, selectedVariable, onChange, field }) {
  if (validation.type === String) {
    return (
      <SelectorContainer>
        <SelectorLabel>{field}</SelectorLabel>
        <SelectorInput
          type="text"
          value={selectedVariable}
          placeholder={validation.default}
          onChange={({ target: { value } }) => {
            onChange(field, value);
          }}
        />
      </SelectorContainer>
    );
  }
  if (validation.type === Boolean) {
    return (
      <SelectorContainer>
        <SelectorLabel>{field}</SelectorLabel>
        <SelectorInput
          type="checkbox"
          checked={selectedVariable}
          onChange={({ target: { checked } }) => {
            onChange(field, checked);
          }}
        />
      </SelectorContainer>
    );
  }
  if (validation.type === "enum") {
    const values = validation.values;

    return (
      <SelectorContainer>
        <SelectorLabel>{field}</SelectorLabel>
        <Select
          width="100%"
          options={
            values
              ? [{ value: "", label: "" }].concat(
                  map(values, (label, value) => ({
                    value,
                    label,
                  }))
                )
              : []
          }
          selected={selectedVariable}
          onChange={({ target: { value } }) => {
            onChange(field, value);
          }}
        />
      </SelectorContainer>
    );
  }

  const fields = validation.type._fields;

  // TODO: How to tackle SSR in this case? Shimming is problematic
  // as server won't inject _fields. Maybe reflection instead?
  if (fields) {
    return (
      <>
        {map(fields, ({ type, values }, id) => {
          console.log(id, type, values);

          return (
            <VariableFields
              key={id}
              validation={{ id, type, values }}
              selectedVariable={selectedVariable}
              onChange={onChange}
              field={`${field}.${id}`}
            />
          );
        })}
      </>
    );
  }

  console.error(`Type ${validation.type} hasn't been implemented yet`);
  return null;
}

export default AssetDesignerPage;
