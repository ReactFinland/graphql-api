"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Mika Schafroth",
    about: "Business-oriented software product engineer (M.Sc. in computer science) featuring 15 years of professional involvement in the entire life-cycle of digital products. Experience developing a variety of disruptive Internet technologies. Insights into modern travel, smart cities, the gig economy and social networking services.",
    image: {
        url: "people/mika.jpg",
    },
    social: {
        homepage: "",
        twitter: "",
        github: "mikaschafroth",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "mikaschafroth",
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
//# sourceMappingURL=mika.js.map