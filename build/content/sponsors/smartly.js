"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Smartly",
    about: "Powering Beautifully Effective Ads",
    image: {
        url: "sponsors/smartly.svg",
    },
    social: {
        homepage: "https://www.smartly.io",
        facebook: "",
        instagram: "",
        twitter: "smartlyio",
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
//# sourceMappingURL=smartly.js.map