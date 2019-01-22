"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "David Khourshid",
    about: "David Khourshid is a Florida-based web developer for Microsoft, a tech author, and speaker. Also a fervent open-source contributor, he is passionate about JavaScript, CSS, animation, innovative user interfaces, and cutting-edge front-end technologies. When not behind a computer keyboard, he’s behind a piano keyboard or traveling.",
    image: {
        url: "people/david.jpg",
    },
    social: {
        homepage: "",
        twitter: "davidkpiano",
        github: "davidkpiano",
        linkedin: "david-khourshid-760055125",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "Orlando",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.STATE_MANAGEMENT],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=david-khourshid.js.map