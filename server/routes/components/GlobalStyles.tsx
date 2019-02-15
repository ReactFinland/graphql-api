import { css, Global } from "@emotion/core";
import * as React from "react";

// TODO: Load fonts from theme
function GlobalStyles({ theme }) {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Finlandica";
          src: url("/media/fonts/finlandica-regular.eot");
          src: url("/media/fonts/finlandica-regular.eot?#iefix")
              format("embedded-opentype"),
            url("/media/fonts/finlandica-regular.woff2") format("woff2"),
            url("/media/fonts/finlandica-regular.woff") format("woff"),
            url("/media/fonts/finlandica-regular.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: "Finlandica Bold";
          src: url("/media/fonts/finlandica-bold.eot");
          src: url("/media/fonts/finlandica-bold.eot?#iefix")
              format("embedded-opentype"),
            url("/media/fonts/finlandica-bold.woff2") format("woff2"),
            url("/media/fonts/finlandica-bold.woff") format("woff"),
            url("/media/fonts/finlandica-bold.ttf") format("truetype");
          font-weight: bold;
          font-style: normal;
        }

        body {
          font-family: "Finlandica", sans-serif;
          background: ${theme.backgroundColor};
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

export default GlobalStyles;
