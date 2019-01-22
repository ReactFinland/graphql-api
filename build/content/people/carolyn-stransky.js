"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Carolyn Stransky",
    about: "Carolyn Stransky is a frontend developer and former technical writer based in Berlin. She currently works at Blacklane and teaches at ReDI School of Digital Integration. You’ll usually find her looking at memes or taking selfies in the nearest restroom.",
    image: {
        url: "people/carolyn.jpg",
    },
    social: {
        twitter: "carolstran",
        github: "carolstran",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Berlin",
    },
    keywords: [keywords_1.default.GRAPHQL, keywords_1.default.GRAPHQLJS],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.TALK],
};
exports.default = person;
//# sourceMappingURL=carolyn-stransky.js.map