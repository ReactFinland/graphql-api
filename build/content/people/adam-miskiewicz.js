"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Adam Miskiewicz",
    about: "Adam Miskiewicz is a software engineer at Airbnb, lover of his two dogs, JavaScript, and GraphQL.",
    image: {
        url: "people/adam.jpg",
    },
    social: {
        homepage: "http://www.adammiskiewicz.com/",
        twitter: "skevy",
        github: "skevy",
    },
    location: {
        country: {
            name: "USA",
            code: "US",
        },
        city: "San Francisco",
    },
    keywords: [keywords_1.default.GRAPHQL, keywords_1.default.GRAPHQLJS],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.TALK],
};
exports.default = person;
//# sourceMappingURL=adam-miskiewicz.js.map