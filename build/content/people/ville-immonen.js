"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Ville Immonen",
    about: "Software developer who works on developer tools at Expo. Formerly co-founded Reindex, a hosted GraphQL service. Likes good coffee, snowboarding and surfing. Lives in Finland with his family.",
    image: {
        url: "people/ville.jpg",
    },
    social: {
        twitter: "VilleImmonen",
        github: "fson",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Espoo",
    },
    keywords: [
        keywords_1.default.REACT,
        keywords_1.default.REACT_NATIVE,
        keywords_1.default.TOOLING,
        keywords_1.default.UNIVERSAL_REACT,
    ],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=ville-immonen.js.map