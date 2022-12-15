"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Rebecca Hill",
    about: "Full stack JavaScript engineer at WeTransfer, building feedback software. Not-so-secretly helping JavaScript take over the world.",
    image: {
        url: "people/rebecca.jpg",
    },
    social: {
        homepage: "http://rebeccahill.co.nz",
        twitter: "rebekaka",
        github: "beerecca",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
    },
    location: {
        country: {
            name: "Netherlands",
            code: "NL",
        },
        city: "Amsterdam",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=rebecca-hill.js.map