"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Maaret Pyhäjärvi",
    about: "Feedback fairy with a day-job at F-Secure as Eng Manager. Tester, (Polyglot) Programmer, Speaker, Author, Conference Organizer. She/Her.",
    image: {
        url: "people/maaret.jpg",
    },
    social: {
        homepage: "http://maaretp.com/",
        twitter: "maaretp",
        github: "maaretp",
        linkedin: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.TESTING],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=maaret-pyhajarvi.js.map