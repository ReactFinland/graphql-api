"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Rick Hanlon",
    about: "Engineer @Facebook · Core @fbjest 🃏 · http://my.pronoun.is/he  · fly and fresh · EST. AKRON",
    image: {
        url: "people/rick.jpg",
    },
    social: {
        homepage: "https://rickhanlon.codes/",
        twitter: "rickhanlonii",
        github: "rickhanlonii",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "Manhattan, New York",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.TESTING, keywords_1.default.TOOLING],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=rick-hanlon.js.map