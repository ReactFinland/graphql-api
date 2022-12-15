"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Eeva-Jonna 'Eevis' Panula",
    about: "Eevis is a software developer and accessibility specialist based in Finland. She loves sharing information about topics like accessibility, React and GraphQL, and is active in different communities aiming to increase equality in the tech field in Finland. When not coding, she explores the world around her with a kayak. ",
    image: {
        url: "people/eevis.jpg",
    },
    social: {
        homepage: "https://eevis.codes",
        twitter: "EevisPanula",
        github: "eevajonnapanula",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "eevajonna",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=eevis.js.map