"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Rami Ertimo",
    about: "Rami is a Consultant working for Asteroid focusing on frontend development and architecture, and design systems. Designer by heart, developer by trait, bridging the gap between designers and developers.",
    image: {
        url: "people/rami.jpg",
    },
    social: {
        homepage: "",
        twitter: "",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "rami-ertimo",
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
//# sourceMappingURL=rami.js.map