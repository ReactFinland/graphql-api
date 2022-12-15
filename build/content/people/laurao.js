"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Laura Ojala",
    about: "Laura Ojala (they/she) has over 15 years of experience in various agile testing roles from Quality Manager in Medical Device start-up to Test Manager in the Financial sector. Since early 2020 they’ve been a Senior Test Automation Developer. Laura enjoys creative challenges and supporting others on their journey. One of their passions is Creative Group Process Facilitation.",
    image: {
        url: "people/laurao.jpg",
    },
    social: {
        homepage: "https://lauraojala.fi/",
        twitter: "laojala",
        github: "laojala",
        facebook: "",
        medium: "",
        instagram: "laojala",
        linkedin: "laojala",
        youtube: "",
        devto: "laojala",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Oulu",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=laurao.js.map