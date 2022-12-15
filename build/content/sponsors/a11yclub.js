"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Accessibility Club",
    about: "Community events around web accessibility & assistive technology",
    image: {
        url: "sponsors/a11yclub.svg",
    },
    social: {
        homepage: "https://accessibility-club.org/",
        facebook: "",
        instagram: "",
        twitter: "",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Nürnberg",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=a11yclub.js.map