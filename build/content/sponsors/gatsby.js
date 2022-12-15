"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Gatsby",
    about: "Modern Development, for the Content Web",
    image: {
        url: "sponsors/gatsby.svg",
    },
    social: {
        homepage: "https://www.gatsbyjs.com/",
        github: "gatsbyjs",
        twitter: "gatsbyjs",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "San Francisco",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=gatsby.js.map