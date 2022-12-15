"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "JSKongress",
    about: "(r)evolution of Architectures",
    image: {
        url: "sponsors/jskongress.png",
    },
    social: {
        homepage: "https://js-kongress.com/?utm_source=reactfi&utm_medium=koop&utm_campaign=20190118&utm_nooverride=1",
        facebook: "",
        instagram: "",
        twitter: "JSKongress",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Munich",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=jskongress.js.map