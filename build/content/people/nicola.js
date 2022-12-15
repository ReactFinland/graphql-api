"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Nicola Corti",
    about: "Nicola Corti is a Google Developer Expert for Kotlin. He has been working with the language since before version 1.0, and he is the maintainer of several open-source libraries and tools for mobile developers. He's currently working in the React Native Core team at Meta, building one of the most popular cross-platform mobile framework. Furthermore, he is an active member of the developer community. His involvement goes from speaking at international conferences to being a member of CFP committees and supporting developer communities across Europe. In his free time, he also loves baking, podcasting, and running.",
    aboutShort: "React Native Core @ Meta",
    image: {
        url: "people/nicola.jpg",
    },
    social: {
        homepage: "https://ncorti.com/",
        twitter: "cortinico",
        github: "cortinico",
        facebook: "",
        medium: "",
        instagram: "cortinico",
        linkedin: "cortinico",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "London",
    },
    keywords: [keywords_1.default.REACT_NATIVE, keywords_1.default.ANDROID, keywords_1.default.KOTLIN],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=nicola.js.map