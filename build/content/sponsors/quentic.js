"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Quentic",
    about: "Connect. Engage. Inspire.",
    image: {
        url: "sponsors/quentic.svg",
    },
    social: {
        homepage: "https://www.quentic.fi",
        facebook: "",
        instagram: "",
        twitter: "",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Berlin",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=quentic.js.map