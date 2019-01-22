"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Andrew Rhyne",
    about: "Originally hailing from Austin, Andrew learned to code at the wee age of 8 first with BASIC and then C shortly thereafter.  He cut his teeth on Slackware while in grade school, and discovered his love for JavaScript and dynamic programming languages while at University. Andrew is very involved in the NodeJS OSS community, contributing to multiple Visionmedia projects such as debug and node-progress as well as the Apollostack ecosystem.  He is also the creator of multiple popular GraphQL server-side libraries, including apollo-errors and apollo-resolvers.",
    aboutShort: "Andrew is very involved in the NodeJS OSS community, contributing to multiple Visionmedia projects such as debug and node-progress as well as the Apollostack ecosystem.  He is also the creator of multiple popular GraphQL server-side libraries, including apollo-errors and apollo-resolvers.",
    image: {
        url: "people/andrew.png",
    },
    social: {
        twitter: "thebigredgeek",
        github: "thebigredgeek",
    },
    location: {
        country: {
            name: "USA",
            code: "US",
        },
        city: "San Francisco",
    },
    keywords: [keywords_1.default.GRAPHQL],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.LIGHTNING_TALK],
};
exports.default = person;
//# sourceMappingURL=andrew-rhyne.js.map