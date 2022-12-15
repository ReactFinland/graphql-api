"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Kenigbolo Meya Stephen",
    about: "Stephen is a Frontend Engineering Lead at BCaster and doubles as the Arch Conveyer/Community Manager of CodeAfrique, a not-for-profit weekend intensive software engineering Bootcamp for underrepresented groups in IT which was first started off in Estonia. During my free time, I sometimes volunteer as an open-source developer for https://adsbexchange.com, play golf and coach football (soccer as Americans call it).",
    image: {
        url: "people/kenigbolo.jpg",
    },
    social: {
        homepage: "https://www.kenigbolo.dev/",
        twitter: "expensivestevie",
        github: "kenigbolo",
        facebook: "kenigbolo.meyastephen",
        medium: "@kenigbolo",
        instagram: "",
        linkedin: "kenigbolo",
        youtube: "",
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
//# sourceMappingURL=kenigbolo-meya-stephen.js.map