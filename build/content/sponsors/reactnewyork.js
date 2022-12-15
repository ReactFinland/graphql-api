"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "React New York",
    about: "The international event for coding inspiration",
    image: {
        url: "sponsors/reactnewyork.svg",
    },
    social: {
        homepage: "https://reactnewyork.com/",
        facebook: "",
        instagram: "",
        twitter: "reactnewyork",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "New York",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=reactnewyork.js.map