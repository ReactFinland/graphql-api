"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@emotion/core");
const forEach_1 = __importDefault(require("lodash/forEach"));
const React = __importStar(require("react"));
function GlobalStyles({ fonts }) {
    React.useEffect(() => {
        forEach_1.default(fonts.variants, (variant) => {
            if (variant.href) {
                generateFontReference(variant.href);
            }
        });
    }, []);
    return (React.createElement(core_1.Global, { styles: core_1.css `
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
      ` }));
}
function generateFontReference(href) {
    if (!href) {
        return;
    }
    const fontLink = document.createElement("link");
    fontLink.href = href;
    fontLink.rel = "stylesheet";
    fontLink.type = "text/css";
    fontLink.crossOrigin = "anonymous";
    document.body.appendChild(fontLink);
}
function generateFontDeclarations(fonts) {
    return fonts.map(generateFontDeclaration).join("\n");
}
function generateFontDeclaration(font) {
    if (font.href) {
        return "";
    }
    return `
@font-face {
  font-family: "${font.family}";
  font-weight: ${font.weight};
  font-style: ${font.style};
  src: ${generateFontSrc(font.fileName, font.formats)}
}`;
}
function generateFontSrc(fileName, formats) {
    if (!fileName || !formats) {
        return "";
    }
    return formats.map(generateFontUrl(fileName)).join(",\n");
}
function generateFontUrl(fileName) {
    return (format) => `url("${fileName}.${format}") format("${generateFormat(format)}")`;
}
function generateFormat(format) {
    if (format === "ttf") {
        return "truetype";
    }
    if (format === "otf") {
        return "opentype";
    }
    return format;
}
exports.default = GlobalStyles;
//# sourceMappingURL=GlobalStyles.js.map