"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Nasim Selmani",
    about: "Diversity, Equity & Inclusion | People Operations | Inclusive Leadership | Intersectionality | Producer",
    image: {
        url: "people/nasim.jpg",
    },
    social: {
        homepage: "https://www.deidei.co/",
        twitter: "nasimselmani",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "nasim-selmani-",
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
//# sourceMappingURL=nasim.js.map