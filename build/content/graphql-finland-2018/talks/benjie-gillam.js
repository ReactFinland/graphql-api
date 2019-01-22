"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const benjie_gillam_1 = __importDefault(require("../../people/benjie-gillam"));
const talk = {
    people: [benjie_gillam_1.default],
    title: "Database-first GraphQL Development",
    description: `Learn how a database-centric approach to GraphQL API development can give your engineers more time to focus on the important parts of your application. Topics covered include authorization, adhering to GraphQL best practices, embracing the power of PostgreSQL, and avoiding common pitfalls.`,
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/15-benjie-gillam.pdf",
        video: "https://www.youtube.com/watch?v=XDOrhTXd4pE",
    },
};
exports.default = talk;
//# sourceMappingURL=benjie-gillam.js.map