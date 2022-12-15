"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Jared Palmer",
    about: "I am passionate about making open source software. My libraries and tools are used in production by thousands of developers including teams at Microsoft, Amazon, Twitter, Airbnb, Walmart, Verizon, Lyft, Stripe, Samsung, US Army, NASA, NOAA, 18F, Canadian Design Service, Morgan Stanley, Goldman Sachs, NFL, MLB, and Coinbase.",
    image: {
        url: "people/jared.jpg",
    },
    social: {
        homepage: "https://jaredpalmer.com",
        twitter: "jaredpalmer",
        github: "jaredpalmer",
        facebook: "",
        medium: "",
        instagram: "jaredpalmer",
        linkedin: "",
        youtube: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "New York",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=jared-palmer.js.map