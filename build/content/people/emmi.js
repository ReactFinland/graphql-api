"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Emmi Marjetta",
    about: "Talent Acquisition & Employer Branding Manager at Hoxhunt",
    image: {
        url: "people/emmi.jpg",
    },
    social: {
        homepage: "",
        twitter: "",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "emmi-marjetta",
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
//# sourceMappingURL=emmi.js.map