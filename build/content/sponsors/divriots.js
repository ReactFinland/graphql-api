"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Divriots",
    about: "Front-end is back!",
    image: {
        url: "sponsors/divriots.svg",
    },
    social: {
        homepage: "https://divriots.com/",
        github: "divriots",
        twitter: "divriots",
        linkedin: "company/divriots",
    },
    location: {
        country: {
            name: "France",
            code: "FR",
        },
        city: "Paris",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=divriots.js.map