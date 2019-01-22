"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Nik Graf",
    about: "Nik cares about good UX and development tools. He co-created several popular open source projects like DraftJS Plugins and Polished. Nik participated in Stripe’s Open Source Retreat and joined Serverless Inc. to deploy auto-scaling infrastructures. In his spare-time he enjoys writing code in Reason and play with WebVR as well as organising the ReactJS Vienna meetup.",
    aboutShort: "Nik cares about good UX and development tools. He co-created several popular open source projects like DraftJS Plugins and Polished. Nik isa also organizer of Reason Conf and React Vienna meetup.",
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
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.TALK, schema_1.ContactType.WORKSHOP],
};
exports.default = person;
//# sourceMappingURL=nik-graf.js.map