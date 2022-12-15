"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Nidhi Kumari",
    about: "Frontend Engineer @shoptradeco | @gsoc 2019 & 2020",
    image: {
        url: "people/nidhi.jpg",
    },
    social: {
        homepage: "https://nimbus20bportfolio.netlify.app/",
        twitter: "NidhiJha98",
        github: "NidhiKJha",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "India",
            code: "IN",
        },
        city: "",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=nidhi.js.map