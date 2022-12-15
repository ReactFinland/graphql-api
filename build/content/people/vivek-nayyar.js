"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Vivek Nayyar",
    about: "An avid reader who is always trying to learn concepts and best practices which should be followed while programming.",
    image: {
        url: "people/vivek.jpg",
    },
    social: {
        homepage: "https://www.viveknayyar.in",
        twitter: "VivekNayyar09",
        github: "vivek12345",
        facebook: "",
        medium: "@VivekNayyar",
        instagram: "",
        linkedin: "viveknayyar",
        youtube: "",
    },
    location: {
        country: {
            name: "India",
            code: "IN",
        },
        city: "Thane",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=vivek-nayyar.js.map