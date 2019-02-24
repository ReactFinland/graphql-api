import styled from "@emotion/styled";
import { Color } from "csstype";
import * as React from "react";
import { Theme } from "../../schema/Theme";
import Select from "../components/Select";
import ThemeTemplate from "../templates/ThemeTemplate";

interface AssetDesignerPageProps {
  theme: Theme;
  themes: Theme[];
}

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
const SidebarHeader = styled.h1``;

const Main = styled.main`
  display: inline-block;
`;

function AssetDesignerPage({ theme, themes }: AssetDesignerPageProps) {
  // TODO: This renders just ThemeTemplate for now -> generalize
  return (
    <article>
      <Sidebar backgroundColor={theme.colors.background}>
        <SidebarHeader>Asset designer</SidebarHeader>
        <ThemeSelector themes={themes} selectedTheme={theme.id} />
      </Sidebar>
      <Main>
        <ThemeTemplate theme={theme} />
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

export default AssetDesignerPage;
