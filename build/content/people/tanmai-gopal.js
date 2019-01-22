"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Tanmai Gopal",
    about: "Tanmai is the co-founder of hasura.io. He is a StackOverflow powered fullstack, polyglot developer whose areas of interest and work span react, GraphQL, nodejs, python, haskell, docker, postgres, kubernetes. He is passionate about making it easy to build things and is the instructor of India's largest MOOC imad.tech with over 250,000 students.",
    aboutShort: "Tanmai is the co-founder of hasura.io. He is passionate about making it easy to build things and is the instructor of India's largest MOOC imad.tech with over 250,000 students.",
    image: {
        url: "people/tanmai.jpg",
    },
    social: {
        twitter: "tanmaigo",
        github: "coco98",
    },
    location: {
        country: {
            name: "India",
            code: "IN",
        },
        city: "Bangalore",
    },
    keywords: [keywords_1.default.GRAPHQL],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.LIGHTNING_TALK],
};
exports.default = person;
//# sourceMappingURL=tanmai-gopal.js.map