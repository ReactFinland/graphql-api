"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Max Stoiber",
    about: `Creator of [Bedrock](https://bedrock.mxstbr.com), styled-components & react-boilerplate. Founder of [GraphCDN](https://graphcdn.io/).`,
    image: {
        url: "people/max.jpg",
    },
    social: {
        homepage: "https://mxstbr.com/",
        twitter: "mxstbr",
        github: "mxstbr",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
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
//# sourceMappingURL=max.js.map