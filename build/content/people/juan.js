"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Juan Picado",
    about: "Lead maintainer for 📦🔒 [Verdaccio](https://verdaccio.org) • 👨🏽‍💻 React and Node.js developer • Open Source believer",
    image: {
        url: "people/juan.jpg",
    },
    social: {
        homepage: "https://github.com/juanpicado",
        twitter: "jotadeveloper",
        github: "juanpicado",
        facebook: "",
        medium: "jotadeveloper",
        instagram: "",
        linkedin: "jotadeveloper",
        youtube: "",
        devto: "jotadeveloper",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Berlin",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=juan.js.map