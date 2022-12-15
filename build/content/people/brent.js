"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Brent Jackson",
    about: `Brent Jackson lives in Brooklyn, NY with his partner and calico roommate. Originally from Huntington, West Virginia, he studied Sociology, Graphic Design, and Japanese Language at Marshall University.

His career in tech has led him from Web and interaction design to user experience design to front-end development. Jackson currently works at Gatsby, previously at Kickstarter, Etsy, LivingSocial, Stitch Fix, and Priceline. He has worked on several open source projects, including Basscss, CSS Stats, Colorable, Rebass, Styled System, Theme UI, and MDX Deck.`,
    image: {
        url: "people/brent.jpg",
    },
    social: {
        homepage: "https://jxnblk.com",
        twitter: "jxnblk",
        github: "jxnblk",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "New York City",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=brent.js.map