"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Apollo",
    about: "We build Apollo Client, Engine, and Server to help you adopt GraphQL.",
    image: {
        url: "sponsors/apollo.svg",
    },
    social: {
        homepage: "https://www.apollographql.com/",
        twitter: "apollographql",
        github: "apollographql",
    },
    location: {
        country: {
            name: "USA",
            code: "US",
        },
        city: "San Francisco",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=apollo.js.map