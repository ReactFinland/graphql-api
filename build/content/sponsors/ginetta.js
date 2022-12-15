"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Ginetta",
    about: "We simplify",
    image: {
        url: "sponsors/ginetta.svg",
    },
    social: {
        github: "ginetta",
        homepage: "https://ginetta.net/",
        facebook: "ginettateam",
        instagram: "ginettateam",
        twitter: "ginettateam",
    },
    location: {
        country: {
            name: "Switzerland",
            code: "CH",
        },
        city: "Zürich",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=ginetta.js.map