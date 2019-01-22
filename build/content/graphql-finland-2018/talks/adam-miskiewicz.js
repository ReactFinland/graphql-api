"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const adam_miskiewicz_1 = __importDefault(require("../../people/adam-miskiewicz"));
const talk = {
    people: [adam_miskiewicz_1.default],
    title: "Adopting GraphQL in Large Codebases",
    description: `With the vibrant and growing GraphQL ecosystem and community, it's simpler than ever to start using GraphQL in your project. However, adopting GraphQL incrementally (and carefully!) in huge codebases powering large distributed systems is not quite as straightforward. We'll dive into how Airbnb is tackling this challenge, what we've learned so far, and how we plan to continue evolving our GraphQL infrastructure in the future.`,
    type: schema_1.SessionType.KEYNOTE,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/01-adam-miskiewicz.pdf",
        video: "https://www.youtube.com/watch?v=8KLwLzRlETc",
    },
};
exports.default = talk;
//# sourceMappingURL=adam-miskiewicz.js.map