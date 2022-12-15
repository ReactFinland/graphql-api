"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Farzad Yousefzadeh",
    about: "Aerospace engineer and Astrophysicist turned Software engineer. Lead engineer @Stately.ai, leading development of Stately editor, a visual editor for modeling application logic using Statecharts",
    image: {
        url: "people/farzad.jpg",
    },
    social: {
        homepage: "https://farzadyz.com/",
        twitter: "farzad_yz",
        github: "farskid",
        facebook: "",
        medium: "farzad_yz",
        instagram: "",
        linkedin: "farzad_yz",
        youtube: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [
        keywords_1.default.STATE_MANAGEMENT,
        keywords_1.default.STATECHARTS,
        keywords_1.default.HEADLESS_COMPONENTS,
        keywords_1.default.ACTOR_MODEL,
    ],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=farzad-yz.js.map