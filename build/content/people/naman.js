"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Naman Goel",
    about: "Maintainer of Stylex, Facebook's not-yet-open-source CSS-in-JS framework. Working on Web Designs System Components at Facebook.",
    image: {
        url: "people/naman.jpg",
    },
    social: {
        homepage: "http://blog.namangoel.com",
        twitter: "naman34",
        github: "nmn",
        facebook: "naman34",
        medium: "naman34",
        instagram: "naman34h",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "San Francisco",
    },
    keywords: [
        keywords_1.default.REACT,
        keywords_1.default.LIBRARIES,
        keywords_1.default.STYLING,
        keywords_1.default.TOOLING,
        keywords_1.default.TYPESCRIPT,
        keywords_1.default.WEBPACK,
        keywords_1.default.BABEL,
        keywords_1.default.NEXT_JS,
    ],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=naman.js.map