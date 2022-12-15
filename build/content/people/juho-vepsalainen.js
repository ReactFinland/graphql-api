"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Juho Vepsäläinen",
    about: "Juho Vepsäläinen is behind the SurviveJS effort. He has been active in the open source scene since the early 2000s and participated in projects like Blender and webpack as a core team member. Blue Arrow Awards winner.",
    image: {
        url: "people/juho.jpg",
    },
    company: "SurviveJS Oy",
    social: {
        homepage: "https://survivejs.com/",
        twitter: "bebraw",
        medium: "@bebraw",
        github: "bebraw",
        linkedin: "juhovepsalainen",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Rautalampi",
    },
    keywords: [keywords_1.default.TOOLING, keywords_1.default.WEBPACK],
    type: [Contact_1.ContactType.ORGANIZER],
};
exports.default = person;
//# sourceMappingURL=juho-vepsalainen.js.map