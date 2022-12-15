"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Doug Sillars",
    about: "Head of Developer Relations at api.video",
    image: {
        url: "people/doug.jpg",
    },
    social: {
        homepage: "",
        twitter: "dougsillars",
        github: "dougsillars",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "dougsillars",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=doug.js.map