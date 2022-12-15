"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Aapeli Haanpuu",
    about: "Aapeli is a frontend/full-stack developer with a long experience using React, Redux and other web technologies.",
    image: {
        url: "people/aapeli.jpg",
    },
    social: {
        homepage: "https://haanpuu.fi",
        twitter: "",
        github: "https://github.com/aapzu/",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "aapeli-haanpuu",
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
    keywords: [keywords_1.default.REACT, keywords_1.default.REDUX, keywords_1.default.TYPESCRIPT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=aapeli.js.map