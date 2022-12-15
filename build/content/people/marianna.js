"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Marianna Österlund",
    about: "Marianna is an accessibility specialist at Selko Digital Oy in Finland. She is a young – yet enthusiastic envoy for a better and more inclusive Internet. For her, accessibility is equality and good service for everyone. She is a many-sided accessibility expert who aims to understand the different types of users, their needs and how to address them in web content.",
    image: {
        url: "people/marianna.jpg",
    },
    social: {
        homepage: "",
        twitter: "",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "marianna-%C3%B6sterlund",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Vaasa",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=marianna.js.map