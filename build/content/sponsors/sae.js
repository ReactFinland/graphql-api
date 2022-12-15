"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "SAE",
    about: "Creative media institute",
    image: {
        url: "sponsors/sae.svg",
    },
    social: {
        homepage: "https://sae.edu",
        facebook: "",
        instagram: "",
        twitter: "",
    },
    location: {
        country: {
            name: "",
            code: "",
        },
        city: "",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=sae.js.map