"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Alma Media",
    about: "Courage to grow",
    image: {
        url: "sponsors/alma.svg",
    },
    social: {
        homepage: "https://www.almamedia.fi/",
        facebook: "almamedia",
        instagram: "almamedia_fi",
        twitter: "almamedia_fi",
        linkedin: "company/alma-media-corporation",
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
//# sourceMappingURL=alma.js.map