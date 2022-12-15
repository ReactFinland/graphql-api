"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Ville Pelkonen",
    about: "Ville is an inspired front end prodigy who started his deep dive into React Native over 3 years ago, and still hasn’t resurfaced. He’s a forward-leaning tech driver often found rambling about UX, accessibility, processes or psychology. Ville tends to get involved wherever anything regarding those could be improved. Currently, Ville works as a Senior Software Engineer and Web Tech Lead at Qvik. Spend a few minutes with him, you’ll learn something new!",
    image: {
        url: "people/ville-pelkonen.jpg",
    },
    social: {
        homepage: "",
        twitter: "",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
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
//# sourceMappingURL=ville-pelkonen.js.map