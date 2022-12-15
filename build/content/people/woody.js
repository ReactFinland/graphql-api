"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Woody Zuill",
    about: "I do Mob Programming workshops, talks and presentations on agile topics, and I coach and guide folks interested in creating a wonderful workplace where people can excel in their work, and in their life",
    image: {
        url: "people/woody.jpg",
    },
    social: {
        homepage: "https://woodyzuill.com/",
        twitter: "WoodyZuill",
        github: "wzuill",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "woodyzuill",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "San Diego",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=woody.js.map