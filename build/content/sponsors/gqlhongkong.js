"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "GraphQL Hong Kong",
    about: "GraphQL at Hong Kong",
    image: {
        url: "sponsors/gqlhongkong.png",
    },
    social: {
        homepage: "https://graphql-hongkong.org/",
        twitter: "GraphQLHongKong",
    },
    location: {
        country: {
            name: "Hong Kong",
            code: "HK",
        },
        city: "Hong Kong",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=gqlhongkong.js.map