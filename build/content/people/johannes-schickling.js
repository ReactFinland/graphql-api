"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Johannes Schickling",
    about: "Johannes Schickling is the co-founder & CEO of Prisma, a GraphQL-based data layer for modern applications. Johannes is interested in Technology, Developer Tools, Open Source, Startups & Music.",
    aboutShort: "Johannes Schickling is the co-founder & CEO of Prisma, a GraphQL-based data layer for modern applications.",
    image: {
        url: "people/johannes.jpg",
    },
    social: {
        homepage: "http://schickling.me/",
        twitter: "schickling",
        github: "schickling",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Berlin",
    },
    keywords: [keywords_1.default.GRAPHQL],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.LIGHTNING_TALK],
};
exports.default = person;
//# sourceMappingURL=johannes-schickling.js.map