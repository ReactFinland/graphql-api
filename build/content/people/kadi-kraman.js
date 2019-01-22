"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Kadi Kraman",
    about: "Kadi is a Software Engineer at Formidable, JavaScript enthusiast, believer in open source and a huge fan of sticking JavaScript on every possible platform.",
    image: {
        url: "people/kadi.jpg",
    },
    social: {
        twitter: "kadikraman",
        github: "kadikraman",
    },
    location: {
        country: {
            name: "Estonia",
            code: "EE",
        },
        city: "London",
    },
    keywords: [keywords_1.default.GRAPHQL],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.LIGHTNING_TALK],
};
exports.default = person;
//# sourceMappingURL=kadi-kraman.js.map