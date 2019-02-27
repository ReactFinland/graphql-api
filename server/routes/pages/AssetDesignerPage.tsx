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

const SelectorLabel = styled.label``;

const VariableContainer = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
`;

// TODO: Share the type from the backend
interface Selected {
  conferenceSeriesId: string;
  conferenceId: string;
  selectionId: string; // One of templates
}

enum ActionTypes {
  UPDATE_FIELD,
}

// TODO: Fetch new data
function assetDesignerReducer(state: Selected, action) {
  const { field, value } = action;

  switch (action.type) {
    case ActionTypes.UPDATE_FIELD:
      updateQuery(field, value);

      return { ...state, [field]: value };
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
  initialSelected: Selected;
  themes: Theme[];
}

function AssetDesignerPage({
  initialSelected,
  themes,
}: AssetDesignerPageProps) {
  const [state, dispatch] = React.useReducer(
    assetDesignerReducer,
    initialSelected
  );
  const theme = themes.find(({ id }) => state.conferenceSeriesId === id);

  // TODO: Type
  const selection =
    templates[state.selectionId] ||
    components[state.selectionId] ||
    NoSelectionFound;
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
            selectedTheme={state.conferenceSeriesId}
            onChange={(field, value) =>
              dispatch({ type: ActionTypes.UPDATE_FIELD, field, value })
            }
          />
        </SidebarItem>

        <SidebarItem>
          <SidebarHeader>Templates</SidebarHeader>
          <ComponentSelector
            templates={Object.keys(templates)}
            selectedTemplate={state.selectionId}
          />
        </SidebarItem>

        <SidebarItem>
          <SidebarHeader>Components</SidebarHeader>
          <ComponentSelector
            templates={Object.keys(components)}
            selectedTemplate={state.selectionId}
          />
        </SidebarItem>

        {variables.length > 0 && (
          <SidebarItem>
            <SidebarHeader>Variables</SidebarHeader>

            {map(variables, variable => (
              <VariableContainer key={variable.id}>
                <SelectorLabel>{variable.id}</SelectorLabel>
                <VariableSelector
                  selected={state}
                  field={variable.id}
                  selectedVariable={variable.value}
                  query={variable.query}
                  mapToCollection={variable.mapToCollection}
                  mapToOption={variable.mapToOption}
                  validation={variable.validation}
                  onChange={(field, value) =>
                    dispatch({
                      type: ActionTypes.UPDATE_FIELD,
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
          selected: state,
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
                conferenceSeriesId: search.conferenceSeriesId,
                selectionId: templateId,
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
  selected: AssetDesignerPageProps["initialSelected"];
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
    if (validation.type === String) {
      return (
        <input
          type="text"
          value={selectedVariable}
          placeholder={validation.default}
          onChange={({ target: { value } }) => {
            onChange(field, value);
          }}
        />
      );
    }
    if (validation.type === Boolean) {
      return (
        <input
          type="checkbox"
          checked={selectedVariable}
          onChange={({ target: { checked } }) => {
            onChange(field, checked);
          }}
        />
      );
    }
    if (validation.type._fields) {
      // TODO: Construct fields recursively now
      console.log("validating object", validation.type._fields);
    }

    console.error(`Type ${validation.type} hasn't been implemented yet`);
    return null;
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

export default AssetDesignerPage;
