"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Gant Laborde",
    about: "Gant is a New Orleans-based force of nature. Not satisfied to be “just” an experienced programmer in an array of disciplines, he’s also a prolific writer, an award-winning public speaker, and an adjunct professor.\n\nA self-improvement aficionado, he takes every opportunity to connect with people and share knowledge through education and outreach. In the zombie apocalypse, Gant will run our much-needed bar, offering up advice, encouragement, and libations in equal measure.",
    image: {
        url: "people/gant.png",
    },
    social: {
        homepage: "http://gantlaborde.com/",
        twitter: "GantLaborde",
        github: "GantMan",
        linkedin: "gant-laborde",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "New Orleans",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.REACT_NATIVE],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=gant-laborde.js.map