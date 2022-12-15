"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Esa-Matti Suuronen",
    about: "Esa-Matti is a software developer from Jyväskylä, Finland with more than 10 years of professional software development experience who has used React and Node.js since their 0.x days. Currently working for Valu Digital as a Lead Developer building developer tools.",
    image: {
        url: "people/esa-matti.jpg",
    },
    social: {
        homepage: "https://esamatti.fi/",
        twitter: "esamatti",
        github: "esamattis",
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
        city: "Jyväskylä",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=esa-matti.js.map