"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Dragos Bilaniuc",
    about: "Freelancer • Web and Mobile Tech Lead/PM • Occasional public speaker | I will help you articulate your idea, develop your product and pitch your business.",
    image: {
        url: "people/dragos.jpg",
    },
    social: {
        homepage: "https://dbln.me/",
        twitter: "dragosbln",
        github: "dragosbln",
        facebook: "dragos.blnc",
        medium: "dragosbln",
        instagram: "dragosbilaniuc",
        linkedin: "dragosbln",
        youtube: "UCqxf5BjmjorefWE3NGEAE_w",
        devto: "",
    },
    location: {
        country: {
            name: "Romania",
            code: "RO",
        },
        city: "Cluj-Napoca",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=dragos.js.map