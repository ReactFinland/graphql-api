"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const jani_evakallio_1 = __importDefault(require("../../people/jani-evakallio"));
const talk = {
    people: [jani_evakallio_1.default],
    title: "The New Best Practices",
    description: `
When React was first introduced, it was ridiculed for going against established web development best practices as we knew them. Five years later, React is the gold standard for how we create user interfaces. 

Along the way, we’ve discovered a new set of tools, design patterns and programming techniques. In this talk, we’ll explore how we can apply the React philosophy to software engineering problems far beyond the React ecosystem.`,
    type: schema_1.SessionType.KEYNOTE,
    keywords: jani_evakallio_1.default.keywords,
};
exports.default = talk;
//# sourceMappingURL=jani-evakallio.js.map