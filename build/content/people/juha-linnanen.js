"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Juha Linnanen",
    about: "Head of mobile dev @GoforeGroup. React Native & Android background.",
    image: {
        url: "people/juha.jpg",
    },
    social: {
        homepage: "",
        twitter: "plrdev",
        github: "eduplus",
        linkedin: "juha-linnanen",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.REACT_NATIVE],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=juha-linnanen.js.map