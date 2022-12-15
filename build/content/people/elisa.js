"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Elisa Heikura",
    about: "Elisa is the Developer of People which is a fancy way of saying that she’s into soft skills such as communication, teamwork and self-awareness. For the past three years she has spent her days teaching and facilitating teams full of technical experts. Which, for her, is truly enjoyable work.",
    image: {
        url: "people/elisa.jpg",
    },
    social: {
        homepage: "https://koodarikuiskaaja.fi/",
        twitter: "elisaliisa",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "elisa-heikura",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=elisa.js.map