"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Creative.ai",
    about: "Artificial intelligence for the creative industries",
    image: {
        url: "sponsors/cai.svg",
    },
    social: {
        homepage: "https://creative.ai/",
        facebook: "",
        instagram: "",
        twitter: "CreativeDotAI",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Berlin",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=cai.js.map