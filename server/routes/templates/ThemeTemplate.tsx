import styled from "@emotion/styled";
import { Color } from "csstype";
import map from "lodash/map";
import { complement, invert } from "polished";
import * as React from "react";
import { Theme } from "../../schema/Theme";

interface ThemeTemplateProps {
  theme: Theme;
}

const ThemeTemplateContainer = styled.section``;
const ThemeTemplateHeader = styled.h1``;

const ColorsContainer = styled.section`
  margin-top: 1em;
  margin-bottom: 1em;
`;
const ColorHeader = styled.h2`
  margin-bottom: 0.5em;
`;

interface ColorProps {
  color: Color;
}
const Color = styled.div`
  padding: 1em;
  display: inline-block;
  width: 8em;
  height: 8em;
  background-color: ${({ color }: ColorProps) => color};
  color: ${({ color }: ColorProps) =>
    tryTo(() => complement(invert(color)), "")};
`;

const LogosContainer = styled.section`
  margin-top: 1em;
  margin-bottom: 1em;
`;
const LogoHeader = styled.h2`
  margin-bottom: 0.5em;
`;

interface LogoProps {
  property: string;
  src: string;
}
const LogoContainer = styled.section`
  margin-right: 1em;
  display: inline-block;
  vertical-align: top;
  font-style: italic;
`;
const Logo = styled.img`
  max-width: 8em;
  max-height: 8em;
  background-color: ${({ property }: LogoProps) =>
    tryTo(() => invert(property), "")};
`;
const LogoLabel = styled.label``;

function tryTo(fn, defaultValue) {
  try {
    return fn();
  } catch (err) {
    return defaultValue;
  }
}

interface ThemeTemplateProps {
  theme: Theme;
  id: string;
}

function ThemeTemplate({ id, theme }: ThemeTemplateProps) {
  return (
    <ThemeTemplateContainer id={id}>
      <ThemeTemplateHeader>Theme</ThemeTemplateHeader>
      <ColorsContainer>
        <ColorHeader>Colors</ColorHeader>
        {map(theme.colors, (color, colorProperty) => (
          <Color color={color} key={color}>
            {colorProperty}
          </Color>
        ))}
      </ColorsContainer>
      <LogosContainer>
        <LogoHeader>Logos</LogoHeader>
        {map(theme.logos, (logo, logoProperty) =>
          map(logo, (image, imageProperty) => {
            const property = `${logoProperty}.${imageProperty}`;

            return (
              <LogoContainer key={property}>
                <LogoLabel>{property}</LogoLabel>
                <Logo property={logoProperty} src={image.url} alt={property} />
              </LogoContainer>
            );
          })
        )}
      </LogosContainer>
    </ThemeTemplateContainer>
  );
}

export default ThemeTemplate;
