"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Calin Tamas",
    about: `Building mobile apps. I aim to write reliable and well-documented software.`,
    image: {
        url: "people/calin.jpeg",
    },
    social: {
        homepage: "https://calintamas.dev/",
        twitter: "calintamas2",
        github: "calintamas",
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
        city: "Cluj-Napoca",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=calin.js.map