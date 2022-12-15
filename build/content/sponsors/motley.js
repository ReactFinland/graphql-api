"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Motley",
    about: "We create better futures for businesses",
    image: {
        url: "sponsors/motley.svg",
    },
    social: {
        homepage: "https://motley.fi/",
        facebook: "Motleyagency",
        github: "motleyagency",
        linkedin: "company/2375211",
        instagram: "motleyagency",
        twitter: "motleyagency",
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
//# sourceMappingURL=motley.js.map