"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Nik Graf",
    about: "Nik is the founder of Serenity and is passionate about cryptography, CRDTs, GraphQL and React. He co-created several popular open source projects like DraftJS Plugins and Polished and participated in Stripe’s Open Source Retreat. In his spare-time he enjoys ski touring, cycling and organising the ReactJS Vienna meetup.",
    image: {
        url: "people/nik.jpg",
    },
    social: {
        homepage: "http://www.nikgraf.com/",
        twitter: "nikgraf",
        github: "nikgraf",
        linkedin: "nikolausgraf",
    },
    location: {
        country: {
            name: "Austria",
            code: "AT",
        },
        city: "Vienna",
    },
    keywords: [keywords_1.default.REASON, keywords_1.default.GRAPHQL, keywords_1.default.REACT, keywords_1.default.REACT_VR],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=nik-graf.js.map