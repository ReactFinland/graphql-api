"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Calin Bogdan",
    about: "JavaScript fellow, clean code maniac, minimalist.",
    image: {
        url: "people/calinb.jpg",
    },
    social: {
        homepage: "https://calinbogdan.com/",
        twitter: "calinesque",
        github: "calinbogdan",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Romania",
            code: "RO",
        },
        city: "",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=calinb.js.map