"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Benjie Gillam",
    about: "Benjie loves using and talking about GraphQL, Node.js, PostgreSQL and React; he is the maintainer of PostGraphile, the original instant GraphQL API for your Postgres database.",
    image: {
        url: "people/benjie.jpg",
    },
    social: {
        homepage: "https://graphile.org/",
        twitter: "benjie",
        github: "benjie",
        linkedin: "benjiegillam",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "Southampton",
    },
    keywords: [keywords_1.default.GRAPHQL],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.LIGHTNING_TALK],
};
exports.default = person;
//# sourceMappingURL=benjie-gillam.js.map