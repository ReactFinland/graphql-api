"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Ivan Goncharov",
    about: "Ivan is very active in GraphQL community and one of the core contributors to graphql-js. He is co-founder of APIs.guru which specializes in API consulting. During last few years they released a bunch of popular GraphQL tools including GraphQL Voyager.",
    aboutShort: "Ivan is one of the core contributors to graphql-js and a co-founder of APIs.guru, which built GraphQL Voyager.",
    image: {
        url: "people/ivan.jpg",
    },
    social: {
        homepage: "https://apis.guru/",
        twitter: "E1Goncharov",
        github: "IvanGoncharov",
    },
    location: {
        country: {
            name: "Ukraine",
            code: "UA",
        },
        city: "Lviv",
    },
    keywords: [keywords_1.default.GRAPHQL, keywords_1.default.GRAPHQLJS],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.LIGHTNING_TALK],
};
exports.default = person;
//# sourceMappingURL=ivan-goncharov.js.map