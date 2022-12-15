"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Tomáš Konrády",
    about: "Frontend developer at Lundegaard a.s. Lover of Ramda and creator of ramda-extension and react-union libraries.",
    image: {
        url: "people/tomas.jpg",
    },
    social: {
        twitter: "konnnyy",
        github: "tommmyy",
        linkedin: "tomaskonrady",
    },
    location: {
        country: {
            name: "Czech Republic",
            code: "CZ",
        },
        city: "Hradec Králové",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.TOOLING],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=tomas-konrady.js.map