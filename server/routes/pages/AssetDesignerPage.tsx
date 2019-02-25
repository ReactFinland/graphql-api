import styled from "@emotion/styled";
import { Color, WidthProperty } from "csstype";
import { map } from "lodash";
import queryString from "query-string";
import * as React from "react";
import { Theme } from "../../schema/Theme";
import connect from "../components/connect";
import Select from "../components/Select";
import * as templates from "../templates";

interface SidebarProps {
  backgroundColor: Color;
  width: WidthProperty<string>;
}

const Sidebar = styled.aside`
  padding: 1em;
  display: inline-block;
  vertical-align: top;
  width: ${({ width }) => width};
  height: 100vh;
  position: sticky;
  background-color: ${({ backgroundColor }) => backgroundColor};
` as React.FC<SidebarProps>;
const SidebarHeader = styled.h2``;
const SidebarItem = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;

interface MainProps {
  width: WidthProperty<string>;
}

const Main = styled.main`
  margin-top: 1em;
  display: inline-block;
  overflow: auto;
  width: ${({ width }) => width};
` as React.FC<MainProps>;

const SelectorLabel = styled.label``;

const VariableContainer = styled.div``;

interface AssetDesignerPageProps {
  // TODO: Share the type from the backend
  selected: {
    conferenceSeriesId: string;
    conferenceId: string;
    templateId: string; // One of templates
  };
  theme: Theme;
  themes: Theme[];
}

function AssetDesignerPage({
  selected,
  theme,
  themes,
}: AssetDesignerPageProps) {
  // TODO: Type
  const template = templates[selected.templateId] || <NoTemplateFound />;
  const variables = template.variables
    ? template.variables.map(variable => ({
        id: variable.id,
        query: variable.query,
        value: selected[variable.id],
      }))
    : []; // TODO: Overlay to selection
  const sideBarWidth = "15em";

  return (
    <article>
      <Sidebar backgroundColor={theme.colors.background} width={sideBarWidth}>
        <SidebarHeader>Asset designer</SidebarHeader>

        <SidebarItem>
          <SidebarHeader>Themes</SidebarHeader>
          <ThemeSelector themes={themes} selectedTheme={theme.id} />
        </SidebarItem>

        <SidebarItem>
          <SidebarHeader>Templates</SidebarHeader>
          <TemplateSelector
            templates={Object.keys(templates)}
            selectedTemplate={selected.templateId}
          />
        </SidebarItem>

        {variables.length > 0 && (
          <SidebarItem>
            <SidebarHeader>Variables</SidebarHeader>

            {map(variables, variable => (
              <VariableContainer key={variable.id}>
                <SelectorLabel>{variable.id}</SelectorLabel>
                <VariableSelector
                  field={variable.id}
                  selectedVariable={variable.value}
                  query={variable.query}
                />
              </VariableContainer>
            ))}
          </SidebarItem>
        )}
      </Sidebar>
      <Main width={`calc(100% - ${sideBarWidth})`}>
        {React.createElement(template, {
          selected,
          theme,
        })}
      </Main>
    </article>
  );
}

function NoTemplateFound() {
  return <>No template found!</>;
}

interface ThemeSelectorProps {
  themes: Theme[];
  selectedTheme: Theme["id"];
}

// TODO: Add basic state management so selected theme can be changed
// without having to refresh the entire page (onChange handler +
// propagation to parent)
function ThemeSelector({ themes, selectedTheme }: ThemeSelectorProps) {
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
      onChange={onSelectChange("conferenceSeriesId")}
    />
  );
}

interface TemplateSelectorProps {
  templates: string[];
  selectedTemplate: string;
}

// TODO: Add basic state management so selected theme can be changed
// without having to refresh the entire page (onChange handler +
// propagation to parent)
function TemplateSelector({
  templates,
  selectedTemplate,
}: TemplateSelectorProps) {
  return (
    <Select
      options={
        templates
          ? templates.map(template => ({
              value: template,
              label: template,
            }))
          : []
      }
      selected={selectedTemplate}
      onChange={({ target: { value } }) => {
        const search = queryString.parse(location.search);

        // Retain only conferenceSeriesId + replace templateId.
        // Otherwise selection might be invalid.
        location.search = queryString.stringify({
          conferenceSeriesId: search.conferenceSeriesId,
          templateId: value,
        });
      }}
    />
  );
}

interface VariableSelector {
  field: string;
  options: string[];
  selectedVariable: string;
  query: string;
}

function VariableSelector({ field, selectedVariable, query }) {
  const ConnectedSelect = connect(
    "/graphql",
    query
  )(({ allConferences }) => {
    return (
      <Select
        options={
          allConferences
            ? allConferences.map(({ id, name }) => ({
                value: id,
                label: name,
              }))
            : []
        }
        selected={selectedVariable}
        onChange={onSelectChange(field)}
      />
    );
  });

  return <ConnectedSelect />;
}

function onSelectChange(field) {
  return ({ target: { value } }) => {
    location.search = queryString.stringify({
      ...queryString.parse(location.search),
      [field]: value,
    });
  };
}

export default AssetDesignerPage;
