"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const locations_1 = require("../../locations");
const sven_sauleau_1 = __importDefault(require("../../people/sven-sauleau"));
const workshop = {
    type: schema_1.SessionType.WORKSHOP,
    people: [sven_sauleau_1.default],
    title: "Babel",
    description: `
You will learn how to refactor your React code effectively in this workshop by Sven Sauleau, one of the core developers of Babel. He will discuss the following topics:

* How and why JSX syntax works?
* How to create your first Babel plugin?
* How to perform type analysis?

[Read your own refactoring tool](https://www.xtuc.fr/notes/your-own-refactoring-tool.html) article to learn more!
`,
    keywords: sven_sauleau_1.default.keywords,
    location: locations_1.elisaAppelsiini,
};
exports.default = workshop;
//# sourceMappingURL=sven-sauleau-workshop.js.map