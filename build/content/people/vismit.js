"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Vismit Chawla",
    about: "Vismit is an experienced recruitment professional with over 10 years of recruiting background in Indian, Danish and Finnish market. Outside work, she likes meeting people with diverse cultural background to enhance on learning new personality & culture and love following healthy lifestyle focusing on nutrition. Passionate about DEI topics and mentoring international talents in integrating in Finnish job market.",
    image: {
        url: "people/vismit.jpg",
    },
    social: {
        homepage: "",
        twitter: "",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "vismit-chawla",
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
//# sourceMappingURL=vismit.js.map