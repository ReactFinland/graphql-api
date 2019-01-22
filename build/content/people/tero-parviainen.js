"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Tero Parviainen",
    about: "Software developer, music hacker, and writer. Building the design tools of the future at @CreativeDotAI. ",
    image: {
        url: "people/tero.jpg",
    },
    social: {
        homepage: "https://teropa.info",
        twitter: "teropa",
        github: "teropa",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [keywords_1.default.REACT],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=tero-parviainen.js.map