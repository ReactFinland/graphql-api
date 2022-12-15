"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const modularScale_1 = __importDefault(require("polished/lib/helpers/modularScale"));
const react_1 = __importDefault(require("react"));
const EmbedPageContainer = styled_1.default.div `
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-rows: 0.25fr 1.75fr;
  align-items: center;
`;
const Title = styled_1.default.h1 `
  font-size: ${modularScale_1.default(7)};
  margin-left: 5vw;
  color: ${props => props.color};
`;
const Embed = styled_1.default.iframe `
  align-self: start;
  justify-self: center;
`;
const EmbedContent = ({ content, theme }) => (react_1.default.createElement(EmbedPageContainer, null,
    react_1.default.createElement(Title, { color: theme.colors.primary }, content.title),
    react_1.default.createElement(Embed, { width: "90%", height: "80%", src: content.link, frameBorder: "0" })));
exports.default = EmbedContent;
//# sourceMappingURL=EmbedContent.js.map