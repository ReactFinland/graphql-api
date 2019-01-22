"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const locations_1 = require("../../locations");
const nik_graf_1 = __importDefault(require("../../people/nik-graf"));
const workshop = {
    type: schema_1.SessionType.WORKSHOP,
    people: [nik_graf_1.default],
    title: "Advanced GraphQL Concepts",
    description: `You understood the basics of GraphQL or even worked with it in a production environment? Then this workshop is for you. While GraphQL comes with many benefits it also requires some rethinking. For example how to secure your server from malicious queries or how to give different users access to different parts of the Schema.

We will answer these questions and many more by covering the following topics:

- Authentication
- Authorization
- Rate limiting
- Persistent Queries
- Schema stitching
- API Design

Every topic is covered by a 20 minute presentation followed by a hands on exercise. After every exercise we will briefly glance at a solution and move on to the next topic. For the exercises you can choose the programming language and tools of your choice. Just come prepared with a working GraphQL setup.

To goal is that by the end of the day you are way more comfortable making design decisions for your GraphQL environment.
`,
    keywords: [keywords_1.default.GRAPHQL],
    location: locations_1.paasitorni,
};
exports.default = workshop;
//# sourceMappingURL=nik-workshop.js.map