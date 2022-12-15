"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Hasura",
    about: "Instant Realtime GraphQL on Postgres",
    image: {
        url: "sponsors/hasura.png",
    },
    social: {
        homepage: "https://hasura.io/",
        twitter: "hasurahq",
        github: "hasura",
    },
    location: {
        country: {
            name: "India",
            code: "IN",
        },
        city: "Bangalore",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=hasura.js.map