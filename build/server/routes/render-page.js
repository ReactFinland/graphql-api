"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trimEnd_1 = __importDefault(require("lodash/trimEnd"));
const process_1 = __importDefault(require("process"));
const server_1 = require("react-dom/server");
function renderPage(title, baseUrl, page) {
    return renderMarkup(title, server_1.renderToString(page), baseUrl);
}
function renderMarkup(title, html, hostname) {
    const env = process_1.default.env.NODE_ENV === "production" ? "production.min" : "development";
    return `<!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <meta charset="utf-8" />
      <script crossorigin src="https://unpkg.com/react@16/umd/react.${env}.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.${env}.js"></script>
      <base href="${cleanBase(hostname)}/" />
      ${reloadPage()}
    </head>
    <body>
      <div id="app">${html}</div>
    </body>
  </html>`;
}
function cleanBase(hostname) {
    return trimEnd_1.default(hostname.split("?")[0], "/");
}
function reloadPage() {
    if (process_1.default.env.NODE_ENV === "production") {
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
exports.default = renderPage;
//# sourceMappingURL=render-page.js.map