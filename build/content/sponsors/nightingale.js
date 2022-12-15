"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Nightingale Health",
    about: "Nightingale Health is aiming to solve the world’s biggest health issue",
    image: {
        url: "sponsors/nightingale.svg",
    },
    social: {
        homepage: "https://nightingalehealth.com/",
        facebook: "",
        twitter: "ngalehealth",
        linkedin: "company/3858219",
        youtube: "",
        instagram: "",
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
//# sourceMappingURL=nightingale.js.map