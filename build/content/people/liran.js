"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Liran Tal",
    about: "GitHub Star 🌟 · DevRel at Snyk 🥑 · Author of [Essential Node.js Security](http://bit.ly/securenodejs) · Node.js CLI Best Practices 🔥 · Docker security 🐳",
    image: {
        url: "people/liran.jpg",
    },
    social: {
        homepage: "",
        twitter: "liran_tal",
        github: "lirantal",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Israel",
            code: "IL",
        },
        city: "Tel Aviv",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=liran.js.map