"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Felix Gnass",
    about: "Author of Capri, node-dev, oazapfts, typed-rpc, react-api-query, classname-variants and lots of other small modules.",
    image: {
        url: "people/felix.jpeg",
    },
    social: {
        homepage: "",
        twitter: "fgnass",
        github: "fgnass",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Hamburg",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=felix.js.map