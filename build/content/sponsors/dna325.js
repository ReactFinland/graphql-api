"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "DNA325",
    about: "Top rated IT staffing and recruitment agency",
    image: {
        url: "sponsors/dna325.svg",
    },
    social: {
        homepage: "https://dna325.com/",
        facebook: "dna325",
        linkedin: "dna325",
    },
    location: {
        country: {
            name: "Ukraine",
            code: "UA",
        },
        city: "Kiev",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=dna325.js.map