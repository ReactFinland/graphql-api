"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Supermetrics",
    about: "We get data",
    image: {
        url: "sponsors/supermetrics.svg",
    },
    social: {
        homepage: "https://supermetrics.com/",
        facebook: "Supermetrics",
        linkedin: "company/supermetrics",
        twitter: "supermetrics",
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
//# sourceMappingURL=supermetrics.js.map