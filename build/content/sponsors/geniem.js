"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Geniem",
    about: "Creative Web Development",
    image: {
        url: "sponsors/geniem.svg",
    },
    social: {
        homepage: "https://www.geniem.fi/in-english/",
        facebook: "geniemfi",
        twitter: "geniemfi",
        linkedin: "company/geniem-ltd-",
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
//# sourceMappingURL=geniem.js.map