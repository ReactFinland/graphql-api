"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Honeypot",
    about: "Choose a job you love",
    image: {
        url: "sponsors/honeypot.svg",
    },
    social: {
        homepage: "https://www.honeypot.io",
        facebook: "Honeypotio",
        instagram: "honeypot.io",
        twitter: "honeypotio",
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
//# sourceMappingURL=honeypot.js.map