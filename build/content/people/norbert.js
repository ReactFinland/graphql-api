"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Norbert de Langen",
    about: "Maintainer of Storybook, love open source and donuts",
    image: {
        url: "people/norbert.jpg",
    },
    social: {
        homepage: "",
        twitter: "norbertdelangen",
        github: "ndelangen",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Netherlands",
            code: "NL",
        },
        city: "Zwolle",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=norbert.js.map