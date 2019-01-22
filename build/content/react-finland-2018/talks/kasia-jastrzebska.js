"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const kasia_jastrzebska_1 = __importDefault(require("../../people/kasia-jastrzebska"));
const talk = {
    people: [kasia_jastrzebska_1.default],
    title: "Styled Components, SSR, and Theming",
    description: "All you need to know to become hero of CSS-in-JS with `styled-components`. We will go through the new API, performance improvements, server side rendering with Next.js and the theming manager available with v2 of `styled-components`.",
    type: schema_1.SessionType.TALK,
    keywords: kasia_jastrzebska_1.default.keywords,
};
exports.default = talk;
//# sourceMappingURL=kasia-jastrzebska.js.map