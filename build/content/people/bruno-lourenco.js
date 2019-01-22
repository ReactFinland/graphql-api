"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Bruno Lourenço",
    about: "",
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
    keywords: [keywords_1.default.REACT],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=bruno-lourenco.js.map