"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Roosa Kallionpää",
    about: "Roosa, a UX and accessibility specialist at Eficode, started as a web developer and still maintains her React skills through varying projects. As a consultant, she wants to foster accessibility innovations by educating professionals in tech.",
    image: {
        url: "people/roosa.png",
    },
    social: {
        homepage: "",
        twitter: "",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "roosak",
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
//# sourceMappingURL=roosa.js.map