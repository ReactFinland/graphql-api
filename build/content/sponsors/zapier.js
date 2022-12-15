"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Zapier",
    about: "Makes you happier :)",
    image: {
        url: "sponsors/zapier.png",
    },
    social: {
        homepage: "https://www.zapier.com/",
        facebook: "ZapierApp",
        linkedin: "company/zapier",
        twitter: "zapier",
        youtube: "ZapierApp",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "San Francisco",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=zapier.js.map