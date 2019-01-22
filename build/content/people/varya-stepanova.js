"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Varya Stepanova",
    about: "Varya Stepanova is a developer enthusiast for modular web and pattern libraries. She loves automation, also in the development processes, strongly believes in open-source community and likes social media. Originally from Russia, she now lives in Helsinki with her family and two cats.",
    image: {
        url: "people/varya.jpg",
    },
    social: {
        homepage: "http://varya.me/",
        twitter: "varya_en",
        github: "varya",
        linkedin: "varyastepanova",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.TOOLING],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=varya-stepanova.js.map