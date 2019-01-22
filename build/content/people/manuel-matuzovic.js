"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Manuel Matuzović",
    about: "I'm a frontend developer from Vienna. I'm specialized in HTML, CSS, accessibility, and performance.",
    image: {
        url: "people/manuel.jpg",
    },
    social: {
        homepage: "https://www.matuzo.at/",
        twitter: "mmatuzo",
        github: "matuzo",
    },
    location: {
        country: {
            name: "Austria",
            code: "AT",
        },
        city: "Vienna",
    },
    keywords: [keywords_1.default.REACT],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=manuel-matuzovic.js.map