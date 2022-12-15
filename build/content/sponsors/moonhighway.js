"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Moon Highway",
    about: "Learn to code with Moon Highway",
    image: {
        url: "sponsors/moonhighway.svg",
    },
    social: {
        homepage: "https://www.moonhighway.com/",
        twitter: "moonhighway",
        github: "MoonHighway",
        linkedin: "moon-highway",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=moonhighway.js.map