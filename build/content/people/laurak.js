"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Laura Kalbag",
    about: `I’m a friendly designer originally from the UK, now living in Ireland. You’ll usually find me talking about rights-respecting design, accessibility and inclusivity, privacy, web design and development.`,
    image: {
        url: "people/laurak.jpg",
    },
    social: {
        homepage: "https://laurakalbag.com/",
        twitter: "LauraKalbag",
        github: "LauraKalbag",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Ireland",
            code: "IE",
        },
        city: "Cork",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=laurak.js.map