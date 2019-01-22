"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Michał Chudziak",
    about: 'Lead software engineer in Callstack - company which provides the highest-level consultancy services for React and React Native. Lover of GraphQL\'s simplicity and a big supporter of "learn once, write anywhere" motto.',
    image: {
        url: "people/michal.jpg",
    },
    social: {
        homepage: "http://callstack.com",
        twitter: "michal_chudziak",
        github: "mike866",
        linkedin: "michalchudziak",
    },
    location: {
        country: {
            name: "Poland",
            code: "PL",
        },
        city: "Wrocław",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.REACT_NATIVE],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=michal-chudziak.js.map