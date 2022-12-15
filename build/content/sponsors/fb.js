"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Facebook",
    about: "Connect with friends and the world around you on Facebook.",
    image: {
        url: "sponsors/fb.svg",
    },
    social: {
        homepage: "https://www.facebook.com/",
        facebook: "facebook",
        instagram: "facebook",
        twitter: "facebook",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "California",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=fb.js.map