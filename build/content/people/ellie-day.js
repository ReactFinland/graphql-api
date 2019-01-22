"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Ellie Day",
    about: "Ellie is a technologist, product engineer, speaker, teacher, and more. Currently, she works at Atlassian as a senior software engineer on the Statuspage team. In her spare time. she's the director of Women Who Code SF and helps early stage software teams scale their software platforms. Previously, she worked at Mavenlink, building highly usable and performant web products, like Full-Cycle Resource Management. Before Mavenlink, she led platform development for mRelief (YC W16), a tech non-profit, that has helped hundreds of thousands of low-income Americans get access to public assistance.",
    aboutShort: "Ellie is a technologist, product engineer, speaker, teacher, and more. She works at Atlassian as a senior software engineer on the Statuspage team. She's also the director of Women Who Code SF.",
    image: {
        url: "people/ellie.jpg",
    },
    social: {
        homepage: "https://heyellieday.com/",
        twitter: "heyellieday",
    },
    location: {
        country: {
            name: "USA",
            code: "US",
        },
        city: "San Francisco",
    },
    keywords: [keywords_1.default.GRAPHQL],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.TALK],
};
exports.default = person;
//# sourceMappingURL=ellie-day.js.map