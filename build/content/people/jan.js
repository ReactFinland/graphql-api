"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Jan Peer Stöcklmair",
    about: "Open-source contributor. JS fanatic. I love optimizing workflows.",
    image: {
        url: "people/jan.png",
    },
    social: {
        homepage: "https://jpeer.at/",
        twitter: "jpeer264",
        github: "jpeer264",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "jpeer",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Austria",
            code: "AT",
        },
        city: "Vienna",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=jan.js.map