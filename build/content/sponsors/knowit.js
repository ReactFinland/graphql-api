"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Knowit",
    about: `Makers of a sustainable future`,
    image: {
        url: "sponsors/knowit.svg",
    },
    social: {
        homepage: "https://www.knowit.fi/",
        facebook: "KnowitOy",
        linkedin: "company/knowit",
        twitter: "knowitsuomi",
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
//# sourceMappingURL=knowit.js.map