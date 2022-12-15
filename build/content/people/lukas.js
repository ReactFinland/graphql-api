"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Lukas Holzer",
    about: "DesignOps — Frontend-Developer and Node.js enthusiast working @Dynatrace with a passion for enhancing design workflows",
    image: {
        url: "people/lukas.jpg",
    },
    social: {
        homepage: "",
        twitter: "luka5c0m",
        github: "lukasholzer",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "lukas-holzer",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Austria",
            code: "AT",
        },
        city: "Linz",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=lukas.js.map