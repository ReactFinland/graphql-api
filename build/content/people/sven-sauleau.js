"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Sven Sauleau",
    about: "Sven is a French software engineer, fascinated by JavaScript engines and apparently trains. OSS enthusiast; working on JavaScript, Babel, Webpack, WebAssembly and some bits of Rust.",
    image: {
        url: "people/sven.jpg",
    },
    social: {
        homepage: "https://sauleau.com",
        twitter: "svensauleau",
        github: "xtuc",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "London",
    },
    keywords: [keywords_1.default.BABEL, keywords_1.default.TOOLING],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=sven-sauleau.js.map