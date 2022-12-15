"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "m4dz 🎙🥑",
    about: `Principal Developer Advocate at ‹div›RIOTS - makers of Backlight, a Design Systems IDE built for Designers and Developers - m4dz is a curious animal. Former Frontend Dev, Devtools enthusiast, he has made the Developer eXperience (DX) his cherished topic. All the Web technologies are under his radar to get things ever simpler. His moto: "Developers are users just like you." As a life-long dreamer his favorite book will ever remains "Alice's Adventures in Wonderland".`,
    image: {
        url: "people/m4dz.jpg",
    },
    social: {
        homepage: "https://m4dz.net/",
        twitter: "m4d_z",
        github: "m4dz",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "m4d-z",
        youtube: "https://www.youtube.com/c/Backlight_design_systems",
        devto: "",
    },
    location: {
        country: {
            name: "France",
            code: "FR",
        },
        city: "Lyon",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.DESIGN_SYSTEMS, keywords_1.default.TOOLING],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=m4dz.js.map