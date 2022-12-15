"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styled_1 = __importDefault(require("@emotion/styled"));
const ReactPageContainer = styled_1.default.div `
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
`;
function ReactContent({ content, css }) {
    return core_1.jsx(ReactPageContainer, { css: css }, content);
}
exports.default = ReactContent;
//# sourceMappingURL=ReactContent.js.map