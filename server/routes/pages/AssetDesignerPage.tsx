import styled from "@emotion/styled";
import { Color } from "csstype";
import * as React from "react";
import { Theme } from "../../schema/Theme";
import ThemeTemplate from "../templates/ThemeTemplate";

interface GenerateTextProps {
  theme: Theme;
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
const ThemeSelector = styled.select``;

const Main = styled.main`
  display: inline-block;
`;

function GenerateText({ theme }: GenerateTextProps) {
  // TODO: This renders just ThemeTemplate for now -> generalize
  return (
    <article>
      <Sidebar backgroundColor={theme.colors.background}>
        <SidebarHeader>Asset designer</SidebarHeader>
        <ThemeSelector />
      </Sidebar>
      <Main>
        <ThemeTemplate theme={theme} />
      </Main>
    </article>
  );
}

export default GenerateText;
