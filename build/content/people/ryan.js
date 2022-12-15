"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Ryan Carniato",
    about: "JavaScript performance enthusiast and fine-grained reactivity super fan. Works on @MarkoDevTeam at eBay. Author of the @solid_js.",
    image: {
        url: "people/ryan.jpg",
    },
    social: {
        homepage: "",
        twitter: "RyanCarniato",
        github: "ryansolid",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "San Jose",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=ryan.js.map