"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Jasmin Assulin",
    about: "CEO & Co-founder at deidei | Diversity, Equity, Inclusion & Comms specialist | She/her",
    image: {
        url: "people/jasmin.jpg",
    },
    social: {
        homepage: "https://www.deidei.co/",
        twitter: "jasminassulin",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "jasmin-assulin",
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
//# sourceMappingURL=jasmin.js.map