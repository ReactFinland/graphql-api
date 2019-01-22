"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const helen_zhukova_1 = __importDefault(require("../../people/helen-zhukova"));
const talk = {
    people: [helen_zhukova_1.default],
    title: "(Un)expected use of GraphQL",
    description: "",
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/07-helen-zhukova.pdf",
        video: "https://www.youtube.com/watch?v=9KG8mqo1iE0",
    },
};
exports.default = talk;
//# sourceMappingURL=helen-zhukova.js.map