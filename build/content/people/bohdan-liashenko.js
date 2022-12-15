"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Bohdan Liashenko",
    about: "Bohdan is a frontend developer at 0+X, a consultancy firm based in Stockholm. He’s passionate about software delivery processes and believes there is still a room for improvements. Creator of codecrumbs, js2flowchart, Under the hood ReactJS.",
    image: {
        url: "people/bohdan.jpg",
    },
    social: {
        homepage: "",
        twitter: "bliashenko",
        github: "Bogdan-Lyashenko",
        facebook: "bliashenko",
        medium: "@bohdanliashenko",
        instagram: "",
        linkedin: "bohdan-liashenko-bb365854",
        youtube: "",
    },
    location: {
        country: {
            name: "Sweden",
            code: "SE",
        },
        city: "Stockholm",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.TOOLING],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=bohdan-liashenko.js.map