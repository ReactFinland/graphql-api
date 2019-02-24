import styled from "@emotion/styled";
import { Color } from "csstype";
import { complement, invert } from "polished";
import * as React from "react";
import { Theme } from "../../schema/Theme";
interface GenerateTextProps {
  theme: Theme;
}

function GenerateText({ theme }: GenerateTextProps) {
  // TODO: This renders just ThemeTemplate for now -> generalize
  return <ThemeTemplate theme={theme} />;
}

interface ThemeTemplateProps {
  theme: Theme;
}

const ThemeTemplateContainer = styled.main`
  margin: 2em;
`;
const ThemeTemplateHeader = styled.h1``;

const ColorContainer = styled.section`
  margin-top: 1em;
  margin-bottom: 1em;
`;
const ColorHeader = styled.h2``;

interface ColorProps {
  color: Color;
}
const Color = styled.div`
  padding: 1em;
  display: inline-block;
  width: 8em;
  height: 8em;
  background-color: ${({ color }: ColorProps) => color};
  color: ${({ color }: ColorProps) => complement(invert(color))};
`;

const LogoContainer = styled.section`
  margin-top: 1em;
  margin-bottom: 1em;
`;
const LogoHeader = styled.h2``;

interface LogoProps {
  field: string;
  src: string;
}
const Logo = styled.img`
  max-width: 8em;
  max-height: 8em;
  vertical-align: top;
  /*background-color: ${() => "black"};*/
  alt: ${({ field }: LogoProps) => field};
`;

function ThemeTemplate({ theme }: ThemeTemplateProps) {
  return (
    <ThemeTemplateContainer>
      <ThemeTemplateHeader>Theme</ThemeTemplateHeader>
      <ColorContainer>
        <ColorHeader>Colors</ColorHeader>
        {Object.keys(theme.colors).map(color => (
          <Color color={theme.colors[color]} key={color}>
            {color}
          </Color>
        ))}
      </ColorContainer>
      <LogoContainer>
        <LogoHeader>Logos</LogoHeader>
        {Object.keys(theme.logos).map(logo => (
          <Logo field={logo} key={logo} src={theme.logos[logo].url} />
        ))}
      </LogoContainer>
    </ThemeTemplateContainer>
  );
}

export default GenerateText;
