"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Kristopher Jackson",
    about: "Experienced Business Development Specialist with a demonstrated history of working in the information technology and services industry. Skilled in Sales, Customer Relationship Management (CRM), Event Management, Management, and Account Management. Strong business development professional with a Finance focused in Economics, and African American History from University of Illinois at Urbana-Champaign.",
    image: {
        url: "people/kristopher.jpg",
    },
    social: {
        homepage: "",
        twitter: "",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "jacksonkristopher",
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
//# sourceMappingURL=kristopher.js.map