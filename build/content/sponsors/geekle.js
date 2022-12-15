"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Geekle",
    about: "The international event for coding inspiration",
    image: {
        url: "sponsors/geekle.svg",
    },
    social: {
        homepage: "https://react.geekle.us/",
        twitter: "GeekleOfficial",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "Wilmington",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=geekle.js.map