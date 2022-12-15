"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Solita",
    about: "Solita is a digital business company",
    image: {
        url: "sponsors/solita.svg",
    },
    social: {
        homepage: "https://www.solita.fi/en/",
        facebook: "Solita",
        github: "solita",
        linkedin: "company/solita-oy",
        instagram: "solitaoy",
        twitter: "SolitaOy",
        youtube: "SolitaOy",
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
//# sourceMappingURL=solita.js.map