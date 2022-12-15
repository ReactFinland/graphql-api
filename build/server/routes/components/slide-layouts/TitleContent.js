"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const modularScale_1 = __importDefault(require("polished/lib/helpers/modularScale"));
const react_1 = __importDefault(require("react"));
const TitlePageContainer = styled_1.default.div `
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
`;
const Title = styled_1.default.h1 `
  font-size: ${modularScale_1.default(7)};
  color: ${(props) => props.color};
  padding: 8vw;
`;
function TitleContent({ content, theme }) {
    return (react_1.default.createElement(TitlePageContainer, null,
        react_1.default.createElement(Title, { color: theme.colors.text }, content.title)));
}
exports.default = TitleContent;
//# sourceMappingURL=TitleContent.js.map