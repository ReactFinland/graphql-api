import styled from "@emotion/styled";
import { Color, WidthProperty } from "csstype";
import domToImage from "dom-to-image";
import { saveAs } from "file-saver";
import createHistory from "history/createBrowserHistory";
import map from "lodash/map";
import queryString from "query-string";
import * as React from "react";
import { Theme } from "../../schema/Theme";
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

const VariableContainer = styled.div``;

// TODO: Share the type from the backend

interface Selected {
  conferenceSeriesId: string;
  conferenceId: string;
  templateId: string; // One of templates
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
  const template = templates[state.templateId] || <NoTemplateFound />;
  const variables = template.variables
    ? template.variables.map(variable => ({
        ...variable,
        value: state[variable.id],
      }))
    : []; // TODO: Overlay to selection
  const sideBarWidth = "15em";
  const assetDesignTemplateId = "asset-design-template-id";

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
                    saveAs(blob, `${template.filename}.png`);
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
          <TemplateSelector
            templates={Object.keys(templates)}
            selectedTemplate={state.templateId}
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
        {React.createElement(template, {
          selected: state,
          theme,
          id: assetDesignTemplateId,
        })}
      </Main>
    </AssetDesignerContainer>
  );
}

function NoTemplateFound() {
  return <>No template found!</>;
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

interface TemplateSelectorProps {
  templates: string[];
  selectedTemplate: string;
}

const TemplateSelectorContainer = styled.div``;
const TemplateSelectorSelectedOption = styled.div``;
const TemplateSelectorOption = styled.a`
  display: block;
`;

function TemplateSelector({
  templates,
  selectedTemplate,
}: TemplateSelectorProps) {
  return (
    <TemplateSelectorContainer>
      {templates.map(templateId =>
        templateId === selectedTemplate ? (
          <TemplateSelectorSelectedOption key={templateId}>
            {templateId}
          </TemplateSelectorSelectedOption>
        ) : (
          <TemplateSelectorOption
            key={templateId}
            href="#"
            onClick={e => {
              e.preventDefault();

              const search = queryString.parse(location.search);

              // Retain only conferenceSeriesId + replace templateId.
              // Otherwise selection might be invalid.
              location.search = queryString.stringify({
                conferenceSeriesId: search.conferenceSeriesId,
                templateId,
              });
            }}
          >
            {templateId}
          </TemplateSelectorOption>
        )
      )}
    </TemplateSelectorContainer>
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
