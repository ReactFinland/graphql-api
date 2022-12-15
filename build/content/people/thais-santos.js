"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Thais Santos",
    about: `Principal Developer Advocate at ‹div›RIOTS - makers of Backlight, a Design SDesign Systems crusader | Blockchain enthusiast | Design Lead @divriots | Making the IT world better one component at a time`,
    image: {
        url: "people/thais.jpg",
    },
    social: {
        homepage: "",
        twitter: "th4is_ds",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Netherlands",
            code: "NL",
        },
        city: "Amsterdam",
    },
    keywords: [
        keywords_1.default.REACT,
        keywords_1.default.DESIGN_SYSTEMS,
        keywords_1.default.STYLING,
        keywords_1.default.TOOLING,
    ],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=thais-santos.js.map