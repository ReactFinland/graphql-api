"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "David Corbacho Roman",
    about: "Señor Developer at Wunder. Originally from Spain, I've been living in Finland for more than 10 years, focusing my career on web development and JavaScript",
    image: {
        url: "people/david-c.jpg",
    },
    social: {
        homepage: "",
        twitter: "dcorbacho",
        github: "dcorb",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "corbacho",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Nummela",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=david-c.js.map