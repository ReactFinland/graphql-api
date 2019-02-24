import styled from "@emotion/styled";
import { Color } from "csstype";
import * as React from "react";
import { Theme } from "../../schema/Theme";
import Select from "../components/Select";
import * as templates from "../templates";

interface SidebarProps {
  backgroundColor: Color;
}

const Sidebar = styled.aside`
  padding: 1em;
  display: inline-block;
  vertical-align: top;
  height: 100vh;
  width: 10em;
  position: sticky;
  background-color: ${({ backgroundColor }: SidebarProps) => backgroundColor};
`;
const SidebarHeader = styled.h2``;
const SidebarItem = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;

const Main = styled.main`
  margin-top: 1em;
  display: inline-block;
  overflow: auto;
  width: calc(100% - 10em);
`;

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
  // TODO: This renders just ThemeTemplate for now -> generalize
  return (
    <article>
      <Sidebar backgroundColor={theme.colors.background}>
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
      </Sidebar>
      <Main>
        {templates[selected.templateId]
          ? React.createElement(templates[selected.templateId], {
              selected,
              theme,
            })
          : "No template found!"}
      </Main>
    </article>
  );
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
      field="conferenceSeriesId"
      options={themes.map(theme => ({
        value: theme.id,
        label: theme.id,
      }))}
      selected={selectedTheme}
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
      field="templateId"
      options={templates.map(template => ({
        value: template,
        label: template,
      }))}
      selected={selectedTemplate}
    />
  );
}

export default AssetDesignerPage;
