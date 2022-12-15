"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Margarita Obraztsova",
    about: "Margarita is a software engineer and international speaker on tools to improving software development processes. She is a consultant software engineer, who loves to find different ways to optimize project work.",
    image: {
        url: "people/margarita.jpg",
    },
    social: {
        homepage: "",
        twitter: "riittagirl",
        github: "",
        facebook: "",
        medium: "",
        instagram: "riittagirl",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=margarita.js.map