"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Netum",
    about: "To create new, you have to understand old",
    image: {
        url: "sponsors/netum.svg",
    },
    social: {
        homepage: "https://www.netum.fi/",
        facebook: "",
        linkedin: "",
        instagram: "",
        twitter: "netumoy",
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
//# sourceMappingURL=netum.js.map