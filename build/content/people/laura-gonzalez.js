"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Laura González",
    about: "Laura González is a designer slash developer that has done hijinks at places such as The Guardian and The Next Web. She loves all things JavaScript and CSS and in her free time she can be seen doing pointless npm modules or feeding squirrels at the park.",
    image: {
        url: "people/laura.jpg",
    },
    social: {
        homepage: "https://www.lauragonzalez.cc",
        twitter: "freezydorito",
        github: "walaura",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "walaura",
        youtube: "",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "London",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=laura-gonzalez.js.map