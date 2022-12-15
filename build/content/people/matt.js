"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Matt Pocock",
    about: "Lead Developer at Stately. Trying to bring on the visual coding revolution.",
    image: {
        url: "people/matt.jpg",
    },
    social: {
        homepage: "",
        twitter: "mpocock1",
        github: "mattpocock",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
        twitch: "mpocock1",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "Oxfordshire",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=matt.js.map