"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Artem Sapegin",
    about: "Artem is a frontend developer living in Berlin, passionate photographer and owner of crazy dogs. Creator of React Styleguidist.",
    image: {
        url: "people/artem.jpg",
    },
    social: {
        homepage: "http://sapegin.me/",
        twitter: "iamsapegin",
        github: "sapegin",
        linkedin: "artemsapegin",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Berlin",
    },
    keywords: [
        keywords_1.default.REACT,
        keywords_1.default.STYLING,
        keywords_1.default.STYLEGUIDIST,
        keywords_1.default.STYLE_GUIDES,
        keywords_1.default.TOOLING,
    ],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=artem-sapegin.js.map