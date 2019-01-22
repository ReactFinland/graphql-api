"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Jani Eväkallio",
    about: "Jani is a small-town Finnish boy far from home. Today he leads a team building cross-stack React mobile and web apps at Formidable London and, in his spare time, performs improvised comedy and speaks at conferences advocating for the React ecosystem, particularly React Native and GraphQL.",
    image: {
        url: "people/jani.jpg",
    },
    social: {
        homepage: "",
        twitter: "jevakallio",
        github: "jevakallio",
        linkedin: "jevakallio",
    },
    location: {
        country: {
            name: "United Kingdom",
            code: "GB",
        },
        city: "London",
    },
    keywords: [keywords_1.default.REACT],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=jani-evakallio.js.map