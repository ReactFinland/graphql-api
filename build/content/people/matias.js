"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Matias Huhta",
    about: "Matias is a passionate Web Components advocate. He's a active member of Web Component communities and a active open source contributor.",
    image: {
        url: "people/matias.jpeg",
    },
    social: {
        homepage: "https://matsu.fi/",
        twitter: "matsuuu_",
        github: "Matsuuu",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "matias-huhta-b0b159106",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Turku",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.TOOLING],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=matias.js.map