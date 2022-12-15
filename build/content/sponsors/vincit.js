"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Vincit",
    about: "Not Another Software Company",
    image: {
        url: "sponsors/vincit.svg",
    },
    social: {
        homepage: "https://www.vincit.fi/",
        facebook: "VincitOyj",
        github: "vincit",
        linkedin: "company/vincit-oy",
        twitter: "VincitOy",
        youtube: "VincitOyTampere",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Tampere",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=vincit.js.map