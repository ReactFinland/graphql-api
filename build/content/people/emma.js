"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Emma Bostian",
    about: "Emma Bostian is a UX Engineer based in Karlsruhe, Germany. She began her career as a Software Engineer at IBM in Austin, Texas, and three years later picked up and moved abroad. She currently focuses on building Design Systems with React. She founded and manages an open-source project, Coding Coach, is a co-host of the Ladybug Podcast.",
    image: {
        url: "people/emma.jpg",
    },
    social: {
        homepage: "",
        twitter: "emmabostian",
        github: "emmabostian",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Karlsruhe",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=emma.js.map