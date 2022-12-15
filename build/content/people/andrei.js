"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Andrei Pfeiffer",
    about: "Eclectic Code Designer. UI Developer for web & mobile. Organizer of revo.js conference.",
    image: {
        url: "people/andrei.jpg",
    },
    social: {
        homepage: "https://andreipfeiffer.dev/",
        twitter: "pfeiffer_andrei",
        github: "andreipfeiffer",
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
        city: "Timisoara",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=andrei.js.map