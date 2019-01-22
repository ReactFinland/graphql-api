"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Sara Vieira",
    about: "Front-End Developer at @YLDio, open sorcerer, maker of useless modules, Blogger, Drummer and horror movie fan girl.",
    image: {
        url: "people/sara.jpg",
    },
    social: {
        homepage: "https://iamsaravieira.com/",
        twitter: "NikkitaFTW",
        github: "SaraVieira",
        linkedin: "saravieira1",
    },
    location: {
        country: {
            name: "Portugal",
            code: "PT",
        },
        city: "",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.TESTING],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=sara-vieira.js.map