"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Gofore",
    about: "We create tomorrow's digital services and work culture today",
    image: {
        url: "sponsors/gofore.svg",
    },
    social: {
        homepage: "https://gofore.com/en/home/",
        facebook: "GoforeGroup",
        github: "gofore",
        linkedin: "company/gofore",
        instagram: "goforegroup",
        twitter: "GoforeGroup",
        youtube: "UCp7QetJnfgp3QvP7oWaclvQ",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=gofore.js.map