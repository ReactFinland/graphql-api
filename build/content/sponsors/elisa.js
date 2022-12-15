"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Elisa",
    about: "Experiences and productivity",
    image: {
        url: "sponsors/elisa.svg",
    },
    social: {
        homepage: "https://elisa.fi/",
        facebook: "elisasuomi",
        github: "ElisaOyj",
        linkedin: "company/elisa",
        youtube: "user/elisa",
        instagram: "elisaoyj",
        twitter: "elisaoyj",
        pinterest: "elisaoyj",
        googleMaps: "https://goo.gl/maps/BrqBxpNc4ZN2",
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
//# sourceMappingURL=elisa.js.map