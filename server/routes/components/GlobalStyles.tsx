import { css, Global } from "@emotion/core";
import * as React from "react";
import { Font, Fonts } from "../../schema/Theme";

interface GlobalStylesProps {
  fonts: Fonts;
}

function GlobalStyles({ fonts }: GlobalStylesProps) {
  return (
    <Global
      styles={css`
        ${generateFontDeclarations(fonts.variants)}

        * {
          box-sizing: border-box;

          /* Force accurate printing in Chrome */
          /* https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust */
          -webkit-print-color-adjust: exact;
        }

        body {
          font-family: "${fonts.primary}", sans-serif;
          background: "white";
        }

        h1,
        h2,
        h3,
        h4,
        html,
        body {
          padding: 0;
          margin: 0;
        }
      `}
    />
  );
}

function generateFontDeclarations(fonts: Font[]) {
  return fonts.map(generateFontDeclaration).join("\n");
}

function generateFontDeclaration(font: Font) {
  return `
@font-face {
  font-family: "${font.family}";
  font-weight: ${font.weight};
  font-style: ${font.style};
  src: ${generateFontSrc(font.fileName, font.formats)}
}`;
}

function generateFontSrc(
  fileName: Font["fileName"],
  formats: Font["formats"]
): string {
  return `format("embedded-opentype),${formats
    .map(generateFontUrl(fileName))
    .join("\n")}`;
}

function generateFontUrl(fileName: string) {
  return (format: string): string =>
    `url("${fileName}.${format}") format(${generateFormat(format)})`;
}

function generateFormat(format: string): string {
  if (format === "ttf") {
    return "truetype";
  }

  if (format === "otf") {
    return "opentype";
  }

  return format;
}

export default GlobalStyles;
