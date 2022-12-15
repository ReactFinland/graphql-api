"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Dynatrace",
    about: "Digitally transform faster, smarter, and easier",
    image: {
        url: "sponsors/dynatrace.svg",
    },
    social: {
        homepage: "https://www.dynatrace.com/",
        facebook: "",
        instagram: "",
        twitter: "",
    },
    location: {
        country: {
            name: "Austria",
            code: "AT",
        },
        city: "Vienna",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=dynatrace.js.map