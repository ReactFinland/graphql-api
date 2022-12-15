"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Thomas Allmer",
    about: "Maintainer Open Web Components, Modern Web, Rocket and works at ING doing Design Systems and Lion Web Components",
    image: {
        url: "people/thomas.jpg",
    },
    social: {
        homepage: "https://modern-web.dev",
        twitter: "daKmoR",
        github: "daKmoR",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "thomas-allmer-1b264716",
        youtube: "",
        devto: "https://dev.to/dakmor",
    },
    location: {
        country: {
            name: "Austria",
            code: "AT",
        },
        city: "Vienna",
    },
    keywords: [keywords_1.default.WEB_COMPONENTS, keywords_1.default.SSG, keywords_1.default.OPEN_SOURCE],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=thomas.js.map