"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Juri Strumpflohner",
    about: "Juri Strumpflohner lives in the very northern part of Italy and is currently working as a JavaScript Architect and Engineering Manager at Nrwl, where he consults for some of the world's biggest companies around the globe. Juri is very involved in the community. He's a Google Developer Expert in Web Technologies & Angular, speaks at international conferences, teaches on Egghead.io, or writes articles on https://juri.dev. He's also a core member of Nx.",
    image: {
        url: "people/juri.jpg",
    },
    social: {
        homepage: "https://juristr.com/",
        twitter: "juristr",
        github: "juristr",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "juristr",
        youtube: "JuriStrumpflohner",
        devto: "juristr",
    },
    location: {
        country: {
            name: "Italy",
            code: "IT",
        },
        city: "Bolzano",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=juri.js.map