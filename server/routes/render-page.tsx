import { trimEnd } from "lodash";
import process from "process";
import * as React from "react";
import { renderToString } from "react-dom/server";
import GlobalStyles from "./components/GlobalStyles";

function renderPage(baseUrl, theme, page) {
  return renderMarkup(
    renderToString(
      <>
        <GlobalStyles theme={theme} />
        {page}
      </>
    ),
    baseUrl
  );
}

function renderMarkup(html, hostname) {
  return `<!DOCTYPE html>
  <html>
    <head>
      <title>Asset generator</title>
      <meta charset="utf-8" />
      <base href="${cleanBase(hostname)}/" />
      ${reloadPage()}
    </head>
    <body>
      <div id="app">${html}</div>
    </body>
  </html>`;
}

function cleanBase(hostname) {
  return trimEnd(hostname.split("?")[0], "/");
}

function reloadPage(): string {
  if (process.env.NODE_ENV === "production") {
    return "";
  }

  return `
    <script>
      let previousVersion;

      setInterval(() => {
        fetch('/ping').then(response => response.json())
        .then(({ serverVersion }) => {
          if (previousVersion) {
            if (previousVersion !== serverVersion) {
              location.reload();
            }
          }
          else {
            previousVersion = serverVersion;
          }
        }).catch(err => {
          // It's fine.
        })
      }, 500);
    </script>
  `;
}

export default renderPage;
