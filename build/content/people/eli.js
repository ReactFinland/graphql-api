"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Eli Schutze Ramirez",
    about: "Originally from Nicaragua, Eli is a London-based web engineer, speaker and community organiser. She is currently helping make money work for everyone at Monzo bank. When she's not working you can probably find her at meetups, conferences or on Twitter.",
    image: {
        url: "people/eli.jpg",
    },
    social: {
        homepage: "",
        twitter: "elibelly",
        github: "elischutze",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "London",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=eli.js.map