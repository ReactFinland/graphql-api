"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Yan Lavryushev",
    about: "",
    image: {
        url: "people/yan.jpg",
    },
    social: {
        homepage: "",
        twitter: "lobatik",
        github: "YanLobat",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
    },
    location: {
        country: {
            name: "Russia",
            code: "RU",
        },
        city: "St. Petersburg",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=yan.js.map