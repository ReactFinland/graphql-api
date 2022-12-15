"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Cybercom",
    about: `Cybercom is an IT consulting company enabling companies and organisations to benefit from the opportunities of the connected world and to enhance their competitiveness. Combining technical edge and strong business insight we provide innovative and sustainable solutions.`,
    image: {
        url: "sponsors/cybercom.svg",
    },
    social: {
        homepage: "https://www.cybercom.com",
        facebook: "cybercomfinland",
        instagram: "cybercomfinland",
        linkedin: "company/cybercom",
        twitter: "CybercomFinland",
    },
    location: {
        country: {
            name: "Sweden",
            code: "SE",
        },
        city: "Stockholm",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=cybercom.js.map