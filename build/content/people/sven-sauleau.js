"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Sven Sauleau",
    about: "Sven is a software engineer living in France and mostly working with Golang and JavaScript. OSS enthusiast and one of the persons behind Babel.",
    image: {
        url: "people/sven.jpg",
    },
    social: {
        homepage: "http://www.xtuc.fr/",
        twitter: "svensauleau",
        github: "xtuc",
    },
    location: {
        country: {
            name: "France",
            code: "FR",
        },
        city: "",
    },
    keywords: [keywords_1.default.BABEL, keywords_1.default.TOOLING],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=sven-sauleau.js.map