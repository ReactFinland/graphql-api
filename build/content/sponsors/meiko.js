"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Meiko",
    about: "Digital tailor for visionaries.",
    image: {
        url: "sponsors/meiko.svg",
    },
    social: {
        homepage: "https://meiko.fi?from=reactfinland2019",
        facebook: "https://www.facebook.com/meiko.fi/",
        instagram: "https://www.instagram.com/meikofi/?hl=fi",
        linkedin: "",
        twitter: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Jyväskylä",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=meiko.js.map