"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Madalyn Rose Parker",
    about: "Working to make the web a better place. Mental health advocate, passionate about a11y, requires strong coffee.",
    image: {
        url: "people/madalyn.jpg",
    },
    social: {
        homepage: "",
        twitter: "madalynrose",
        github: "madalynrose",
        facebook: "",
        medium: "madalynrose",
        instagram: "madalynrose09",
        linkedin: "madalynparker",
        youtube: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "Ann Arbor, Michigan",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=madalyn.js.map