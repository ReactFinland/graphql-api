"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Tejas Kumar",
    about: "I write code and love life.",
    image: {
        url: "people/tejas.jpg",
    },
    social: {
        homepage: "",
        twitter: "TejasKumar_",
        github: "tejasq",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Berlin",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.TOOLING],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=tejas-kumar.js.map