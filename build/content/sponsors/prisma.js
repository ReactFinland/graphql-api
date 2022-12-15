"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Prisma",
    about: "Build a GraphQL server with any database",
    image: {
        url: "sponsors/prisma.svg",
    },
    social: {
        homepage: "https://www.prisma.io/",
        github: "prismagraphql",
        twitter: "prisma",
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
//# sourceMappingURL=prisma.js.map