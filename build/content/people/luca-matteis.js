"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Luca Matteis",
    about: "Event Sourcing, Statecharts, Behavioral Programming.",
    image: {
        url: "people/luca.jpg",
    },
    social: {
        medium: "@lmatteis",
        twitter: "lmatteis",
        github: "lmatteis",
    },
    location: {
        country: {
            name: "Italy",
            code: "IT",
        },
        city: "Rome",
    },
    keywords: [keywords_1.default.REACT],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=luca-matteis.js.map