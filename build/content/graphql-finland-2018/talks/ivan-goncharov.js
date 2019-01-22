"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const ivan_goncharov_1 = __importDefault(require("../../people/ivan-goncharov"));
const talk = {
    people: [ivan_goncharov_1.default],
    title: "Hidden gems of GraphQL query",
    description: `We all love GraphQL query syntax because it’s simple and easy to learn. At the same time, it has a few useful features that are typically overlooked. If you think that you already know everything about GraphQL queries this talk is for you. Warning: this talk will contain spoilers from GraphQL Specification.`,
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.GRAPHQL, keywords_1.default.GRAPHQLJS, keywords_1.default.SPEC],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/10-ivan-goncharov.pdf",
        video: "https://www.youtube.com/watch?v=AeEFjFHehnM",
    },
};
exports.default = talk;
//# sourceMappingURL=ivan-goncharov.js.map