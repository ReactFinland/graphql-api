"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Patrick Ecker",
    about: "Patrick is a frontend engineer at Rohea Oy, building the next big sales enablement platform built on Flow, ReScript, React and PHP. He is also core team member of the ReScript programming language, working on the language's tooling infrastructure and documentation website.",
    image: {
        url: "people/patrick.jpg",
    },
    social: {
        homepage: "",
        twitter: "ryyppy",
        github: "ryyppy",
        linkedin: "patrick-stapfer-5ba205a4",
    },
    location: {
        country: {
            name: "Austria",
            code: "AT",
        },
        city: "Vienna",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.RESCRIPT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=patrick-ecker.js.map