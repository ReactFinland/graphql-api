"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Tae'lur Alexis",
    about: "Tae'lur Alexis is a Software Engineer with a love for building accessible UI and Founder of @CodeEverydayio. She is passionate about sharing her love for learning and helping people get into tech.",
    image: {
        url: "people/taelur.jpg",
    },
    social: {
        homepage: "",
        twitter: "TaelurAlexis",
        github: "cyberbarbie",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "Seattle",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=taelur-alexis.js.map