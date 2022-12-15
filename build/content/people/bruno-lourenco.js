"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Bruno Lourenço",
    about: "Bruno Lourenço has loved animations since Flash. He’s passionate about physics-based UI animations and believes coding them doesn’t have to be complicated - which led him to create React-Morph. He’s a Senior Frontend Developer at Ginetta, a design agency based in Switzerland.",
    image: {
        url: "people/bruno.jpg",
    },
    social: {
        homepage: "",
        twitter: "brunnolou",
        github: "brunnolou",
        linkedin: "",
    },
    location: {
        country: {
            name: "Portugal",
            code: "PT",
        },
        city: "Braga",
    },
    keywords: [keywords_1.default.ANIMATION, keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=bruno-lourenco.js.map