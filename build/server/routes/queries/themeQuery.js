"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const themeFragment_1 = __importDefault(require("./fragments/themeFragment"));
const themeQuery = `
query ThemeQuery($conferenceSeriesId: ID!) {
  theme(conferenceId: $conferenceSeriesId) {
    ...themeFragment
  }
}

${themeFragment_1.default}
`;
exports.default = themeQuery;
//# sourceMappingURL=themeQuery.js.map