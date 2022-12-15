"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Lauri Nevanperä",
    about: "Lauri is a Lead Frontend developer at Alma Media. He's currently interested in Web Workers and psychological safety in work teams. Always ready for a bicycle ride or for a cup of good coffee",
    image: {
        url: "people/lauri.jpg",
    },
    social: {
        homepage: "",
        twitter: "LauriNevanpera",
        github: "wombbu",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "laurinevanpera",
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
//# sourceMappingURL=lauri.js.map