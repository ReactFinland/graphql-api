"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Artem Zakharchenko",
    about: "Full-stack JavaScript engineer at Oracle, medical doctor, musician, designer. A huge endorser of functional programming and clean project architecture.",
    image: {
        url: "people/artem-z.jpg",
    },
    social: {
        homepage: "https://redd.one",
        twitter: "kettanaito",
        github: "kettanaito",
        linkedin: "artem-zakharchenko",
    },
    location: {
        country: {
            name: "Ukraine",
            code: "UA",
        },
        city: "",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.STYLING, keywords_1.default.TOOLING],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=artem-zakharchenko.js.map