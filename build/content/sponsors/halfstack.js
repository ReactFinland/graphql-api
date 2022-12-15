"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "HalfStack",
    about: "HalfStack is a one-day, single track, fun JS conf",
    image: {
        url: "sponsors/halfstack.svg",
    },
    social: {
        homepage: "http://halfstackconf.com/",
        facebook: "halfstackconf",
        instagram: "halfstackconf",
        twitter: "london_ajax",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "London",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=halfstack.js.map