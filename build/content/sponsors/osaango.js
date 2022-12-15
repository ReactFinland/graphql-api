"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Osaango",
    about: "Learn the next big thing - Skills & Methods for API, Platform and AI Economy",
    image: {
        url: "sponsors/osaango.png",
    },
    social: {
        homepage: "https://www.osaango.com/",
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
//# sourceMappingURL=osaango.js.map