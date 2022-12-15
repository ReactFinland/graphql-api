"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "React Week",
    about: "A week of React in New York",
    image: {
        url: "sponsors/reactweek.svg",
    },
    social: {
        homepage: "https://reactweek.nyc/",
        facebook: "",
        instagram: "",
        twitter: "reactweek",
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
//# sourceMappingURL=reactweek.js.map