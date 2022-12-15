"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Andrey Goncharov",
    about: "Andrey is a full-stack TypeScript and JavaScript developer. He came from working in two software consultancies on a variety of projects: from small startups to well-established enterprises. Now he is happy to be a part of a family at Hazelcast. Big lover of open-source. Author of a small technical blog. Runs BeerJS Voronezh.",
    image: {
        url: "people/andrey-g.jpg",
    },
    social: {
        homepage: "https://goncharov.page",
        twitter: "ai_goncharov",
        github: "aigoncharov",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "aigoncharov",
        youtube: "",
        devto: "aigoncharov",
    },
    location: {
        country: {
            name: "Russia",
            code: "RU",
        },
        city: "Voronezh",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=andrey-g.js.map