"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Postgraphile",
    about: "Instant GraphQL API for PostgreSQL database",
    image: {
        url: "sponsors/postgraphile.svg",
    },
    social: {
        homepage: "https://www.graphile.org/postgraphile/",
        twitter: "Benjie",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "Southampton",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=postgraphile.js.map