"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Je Xia",
    about: "Web developer and graphic designer. Creator of Aleph.js and esm.sh.",
    image: {
        url: "people/je.jpg",
    },
    social: {
        homepage: "http://jex.me/",
        twitter: "jexia_",
        github: "ije",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "China",
            code: "CN",
        },
        city: "Beijing",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=je.js.map