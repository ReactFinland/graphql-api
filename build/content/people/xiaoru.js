"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Xiaoru Li",
    about: "Xiaoru is a computer science student at Karlsruhe Institute of Technology, Germany. He loves to teach himself cool stuff like machine learning and web technologies and write about them.",
    image: {
        url: "people/xiaoru.jpg",
    },
    social: {
        homepage: "https://www.xiaoru.li",
        twitter: "hexrcs",
        github: "hexrcs",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "hexrcs",
    },
    location: {
        country: {
            name: "China",
            code: "CN",
        },
        city: "",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=xiaoru.js.map