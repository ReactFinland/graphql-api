"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Amazon Web Services",
    about: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. ",
    image: {
        url: "sponsors/amazon.png",
    },
    social: {
        homepage: "https://aws.amazon.com/",
        twitter: "AWSCloud",
    },
    location: {
        country: {
            name: "USA",
            code: "US",
        },
        city: "Seattle",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=amazon.js.map