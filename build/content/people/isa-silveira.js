"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Isa Silveira",
    about: "Devoted to the arduous task of making devs take real world problems as seriously as their tooling.",
    image: {
        url: "people/isa.jpg",
    },
    social: {
        homepage: "",
        twitter: "silveira_bells",
        github: "bella-silveira",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
    },
    location: {
        country: {
            name: "Sweden",
            code: "SE",
        },
        city: "Stockholm",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=isa-silveira.js.map