"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Diego Haz",
    about: "Software architect, designer, indie maker, cosmopolitan, astronomy lover.",
    image: {
        url: "people/diego.jpg",
    },
    social: {
        homepage: "",
        twitter: "diegohaz",
        github: "diegohaz",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Brazil",
            code: "BR",
        },
        city: "Rio Janeiro",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=diego-haz.js.map