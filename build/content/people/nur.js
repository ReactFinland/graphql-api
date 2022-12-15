"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Nur Şah Ketene",
    about: "Managing Consultant @ Columbia Road, Advisor, Coach, Teacher.",
    image: {
        url: "people/nur.jpg",
    },
    social: {
        homepage: "https://nursahketene.com/",
        twitter: "nursahketene",
        github: "nursahketene",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "nursahketene",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=nur.js.map