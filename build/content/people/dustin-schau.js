"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Dustin Schau",
    about: "A front-end developer specializing in all things JavaScript. I don't totally suck 👋 Software Engineer @gatsbyjs",
    image: {
        url: "people/dustin.jpg",
    },
    social: {
        homepage: "https://dustinschau.com/",
        twitter: "schaudustin",
        github: "DSchau",
        facebook: "Dustin-Schau/100004599014794",
        medium: "",
        instagram: "",
        linkedin: "dustin-schau-928907132",
        youtube: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "Omaha",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=dustin-schau.js.map