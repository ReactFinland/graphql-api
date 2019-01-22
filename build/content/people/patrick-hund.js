"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Patrick Hund",
    about: "Patrick helps React and Node.js conquer the tech stack at eBay in Berlin. He has been a professional software developer since 2000 and joined eBay in 2010. Notable projects are the relaunch of the homepage of eBay's car trading platform mobile.de in 2015 and the rewrite of eBay’s automotive online community MOTOR-TALK.de (ongoing, since 2017).",
    image: {
        url: "people/patrick-hund.jpg",
    },
    social: {
        homepage: "https://ebaytech.berlin",
        twitter: "wiekatz",
        github: "pahund",
        facebook: "",
        medium: "@wiekatz",
        instagram: "",
        linkedin: "patrickhund",
        youtube: "https://www.youtube.com/channel/UCF0c1u0VvFw2MU_fjqtmMbQ",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Berlin",
    },
    keywords: [keywords_1.default.LEGACY, keywords_1.default.REACT, keywords_1.default.REDUX],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=patrick-hund.js.map