"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const locations_1 = require("../../locations");
const marc_andre_giroux_1 = __importDefault(require("../../people/marc-andre-giroux"));
const workshop = {
    type: schema_1.SessionType.WORKSHOP,
    people: [marc_andre_giroux_1.default],
    title: "GraphQL Schema Design",
    description: `Building a brand new GraphQL API? Migrating from a REST API? If you are interested in designing a GraphQL schema that is great to use by clients and stands the test of time, this workshop is for you.

Alternating between presentations and hands on exercices, this workshop will cover:

* Good development workflows to build GraphQL APIs
* Common anti-patterns
* How to build an evolvable schema
* How to approach a migration from another API
* Domain driven design & GraphQL
* How to design errors
* Must-have tooling for building GraphQL APIs at scale
* Many other great practices used in the largest GraphQL APIs out there!

For the exercices, we will only use the GraphQL SDL (Schema Definition Language), meaning you'll get to learn no matter what language you use to build your schema.`,
    keywords: [keywords_1.default.GRAPHQL, keywords_1.default.REACT],
    location: locations_1.paasitorni,
};
exports.default = workshop;
//# sourceMappingURL=marc-workshop.js.map