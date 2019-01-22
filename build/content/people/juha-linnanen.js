"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Juha Linnanen",
    about: "Mobile dev enthusiast, boardgamer and mtg cuber.",
    image: {
        url: "people/juha.jpg",
    },
    social: {
        homepage: "",
        twitter: "pillar15",
        github: "eduplus",
        linkedin: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.REACT_NATIVE],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=juha-linnanen.js.map