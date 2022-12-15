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
// TODO: Allow background-size to be tuneable (contain is needed sometimes)
const MarkdownContainer = styled_1.default(exclude_props_1.default(["background", "title"], "div")) `
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-rows: ${({ title }) => (title ? "0.25fr 1.75fr" : "1fr")};
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
const Markup = styled_1.default(exclude_props_1.default(["color", "title"], "div")) `
  font-size: ${modularScale_1.default(4)};
  margin-left: 5vw;
  margin-right: 5vw;
  align-self: ${({ title }) => (title ? "start" : "center")};
  color: ${({ color }) => color};
  opacity: 0.8;
`;
const MarkdownContent = ({ background, content, theme, }) => (react_1.default.createElement(MarkdownContainer, { background: get_background_1.default(background), title: content.title },
    content.title && (react_1.default.createElement(Title, { color: theme.colors.text },
        react_1.default.createElement(markdown_to_jsx_1.default, null, content.title))),
    react_1.default.createElement(Markup, { className: "markup", color: theme.colors.text, title: content.title },
        react_1.default.createElement(markdown_to_jsx_1.default, null, content.markup))));
exports.default = MarkdownContent;
//# sourceMappingURL=MarkdownContent.js.map