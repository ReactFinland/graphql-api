"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Rachel Nabors",
    about: "React Core. Interactive storyteller. Infinite learner. Lightning before the thunder. Author of [Animation at Work](http://bkaprt.com/aaw), Google Dev Expert—Formerly W3C, MSFT. INFJ singleton",
    image: {
        url: "people/rachel.jpg",
    },
    social: {
        homepage: "http://rachelnabors.com",
        twitter: "rachelnabors",
        github: "rachelnabors",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
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
//# sourceMappingURL=rachel-nabors.js.map