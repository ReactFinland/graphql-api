"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Kenneth Sutherland",
    about: "Kenneth Sutherland is a software developer of 20 years. Experienced projects from games consoles, mobile phones, web and desktop applications and along the way worked in tiny start-ups to businesses with 50,000+ staff.",
    image: {
        url: "people/kenneth.jpg",
    },
    social: {
        homepage: "http://www.kennethsutherland.com/",
        twitter: "_delp_",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "flexguru",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Scotland",
            code: "GB-SCT",
        },
        city: "Edinburgh",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=kenneth-sutherland.js.map