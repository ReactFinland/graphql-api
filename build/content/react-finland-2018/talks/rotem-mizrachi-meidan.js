"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const rotem_mizrachi_meidan_1 = __importDefault(require("../../people/rotem-mizrachi-meidan"));
const talk = {
    people: [rotem_mizrachi_meidan_1.default],
    title: "Detox: A year in. Building it, Testing with it",
    description: `
A year in, developing and using Detox in production taught us a lot. From designing its API to consuming it, testing real user scenarios to advanced mocking, we learned what makes sense when E2E testing an app and what doesn’t.

In this talk, we’ll discuss how Detox works and what makes it deterministic, cover some advanced use cases and methodologies, go over new features and tease the ones that are upcoming.
`,
    type: schema_1.SessionType.TALK,
    keywords: rotem_mizrachi_meidan_1.default.keywords,
};
exports.default = talk;
//# sourceMappingURL=rotem-mizrachi-meidan.js.map