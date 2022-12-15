"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const markdown_to_jsx_1 = __importDefault(require("markdown-to-jsx"));
const modularScale_1 = __importDefault(require("polished/lib/helpers/modularScale"));
const react_1 = __importDefault(require("react"));
const exclude_props_1 = __importDefault(require("../exclude-props"));
const get_background_1 = __importDefault(require("./get-background"));
const GridContainer = styled_1.default(exclude_props_1.default(["background"], "div")) `
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-rows: 0.25fr 1.75fr;
  align-items: center;
  line-height: 1.5;
  background: ${({ background }) => background};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const Title = styled_1.default.h1 `
  font-size: ${modularScale_1.default(6)};
  margin-left: 5vw;
  margin-right: 5vw;
  color: ${props => props.color};
`;
const Markup = styled_1.default(exclude_props_1.default(["color"], "div")) `
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: ${modularScale_1.default(4)};
  margin-left: 5vw;
  margin-right: 5vw;
  align-self: start;
  color: ${props => props.color};
  opacity: 0.8;
`;
const MarkdownContainer = styled_1.default.div `
  margin: 0.5em;
`;
const GridContent = ({ background, content, theme }) => (react_1.default.createElement(GridContainer, { background: get_background_1.default(background) },
    react_1.default.createElement(Title, { color: theme.colors.primary },
        react_1.default.createElement(markdown_to_jsx_1.default, null, content.title)),
    react_1.default.createElement(Markup, { className: "markup", color: theme.colors.secondary },
        react_1.default.createElement(MarkdownContainer, null,
            react_1.default.createElement(markdown_to_jsx_1.default, null, content.columns[0])),
        react_1.default.createElement(MarkdownContainer, null,
            react_1.default.createElement(markdown_to_jsx_1.default, null, content.columns[1])))));
exports.default = GridContent;
//# sourceMappingURL=GridContent.js.map