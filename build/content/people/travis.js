"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Travis Arnold",
    about: "Designer 🎨 Engineer 📐 Systems 🎛 React ⚛️",
    image: {
        url: "people/travis.jpg",
    },
    social: {
        homepage: "https://souporserious.com/",
        twitter: "souporserious",
        github: "souporserious",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "San Diego",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=travis.js.map