"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Valamis",
    about: "We help industry-leading enterprises execute their vision",
    image: {
        url: "sponsors/valamis.svg",
    },
    social: {
        homepage: "https://www.valamis.com",
        facebook: "valamisgroup",
        github: "valamis",
        linkedin: "company/valamis",
        instagram: "valamis",
        twitter: "valamis",
        youtube: "UCs3v9ObvcknbJq0xALSqj-Q",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Joensuu",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=valamis.js.map