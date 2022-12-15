"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Varya Stepanova",
    about: "Varya Stepanova is a Design Systems Architect and Product Owner with extensive experience in management and development. During her tech career, Varya's primary focus was in component-focused UI design and development, creating helpful tooling for the subject and spreading the practices across organizations. Nowadays, she brings design systems to the next level of success through cooperative work in the company development community and bridging the gap for designers, developers, and business specialists.",
    image: {
        url: "people/varya.jpg",
    },
    social: {
        homepage: "http://varya.me/",
        twitter: "varya_en",
        github: "varya",
        linkedin: "varyastepanova",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [
        keywords_1.default.REACT,
        keywords_1.default.STYLING,
        keywords_1.default.STYLE_GUIDES,
        keywords_1.default.TOOLING,
    ],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=varya-stepanova.js.map