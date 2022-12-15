"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Monica Lent",
    about: "Monica is the Frontend Lead at SumUp, a multinational FinTech startup based in Berlin. She began coding at the tender age of ten years old, and somehow managed to pivot from studying Latin in university to where she is today, leading a team of developers distributed in three countries. Before moving abroad, Monica worked in domains such as natural language processing and cloud technologies.",
    image: {
        url: "people/monica.jpg",
    },
    social: {
        homepage: "https://monicalent.com/",
        twitter: "monicalent",
        github: "mlent",
        linkedin: "monica-lent-542122145",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Berlin",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.ARCHITECTURE, keywords_1.default.TOOLING],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=monica-lent.js.map