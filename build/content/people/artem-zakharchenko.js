"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Artem Zakharchenko",
    about: "Full-stack JavaScript engineer, doctor, musician, designer. Walking the marvelous road of learning.",
    image: {
        url: "people/artem-z.jpg",
    },
    social: {
        homepage: "",
        twitter: "kettanaito",
        github: "kettanaito",
        linkedin: "artem-zakharchenko",
    },
    location: {
        country: {
            name: "Czech Republic",
            code: "CZ",
        },
        city: "Prague",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.STYLING, keywords_1.default.TOOLING],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=artem-zakharchenko.js.map