"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const modularScale_1 = __importDefault(require("polished/lib/helpers/modularScale"));
const react_1 = __importDefault(require("react"));
const exclude_props_1 = __importDefault(require("../exclude-props"));
const SectionPageContainer = styled_1.default(exclude_props_1.default("backgroundColor", "div")) `
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  background: ${props => props.background};
`;
const Title = styled_1.default.h1 `
  font-size: ${modularScale_1.default(7)};
  margin-left: 10vw;
  color: ${props => props.color};
`;
const SectionContent = ({ content, theme }) => (react_1.default.createElement(SectionPageContainer, { background: theme.colors.primary },
    react_1.default.createElement(Title, { color: theme.colors.background }, content.title)));
exports.default = SectionContent;
//# sourceMappingURL=SectionContent.js.map