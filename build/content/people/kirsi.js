"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Kirsi Korhonen",
    about: "Whirlwind of Competence. Your Partner in Internationalisation, Talent Attraction & Retention, Intercultural Awareness & much more.",
    image: {
        url: "people/kirsi.jpg",
    },
    social: {
        homepage: "",
        twitter: "Kirsi_Ko",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "kirsi",
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
//# sourceMappingURL=kirsi.js.map