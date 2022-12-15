"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Gleb Bahmutov",
    about: "JavaScript ninja, image processing expert, software quality fanatic. Sr Director of Engineering at Mercari US. MS MVP for OSS work.",
    image: {
        url: "people/gleb.jpg",
    },
    social: {
        homepage: "https://glebbahmutov.com/",
        twitter: "bahmutov",
        github: "bahmutov",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/bahmutov/",
        youtube: "https://youtube.com/glebbahmutov",
        devto: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "Boston",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=gleb.js.map