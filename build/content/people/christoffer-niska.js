"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Christoffer Niska",
    about: "Tech leader with a passion for programming. Head of Tech at @digiaonline. Father of four. Open Source enthusiast. JavaScript Ninja. GraphQL evangelist.",
    image: {
        url: "people/crisu.jpg",
    },
    social: {
        homepage: "https://about.me/crisu83",
        twitter: "Crisu83",
        github: "crisu83",
        linkedin: "crisu83",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [keywords_1.default.GRAPHQL],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=christoffer-niska.js.map