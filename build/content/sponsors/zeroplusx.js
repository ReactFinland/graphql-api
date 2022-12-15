"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "0+X",
    about: "0+X is a technology company offering consultants and experts in full-stack, mobile and big-data development to companies in Scandinavia.",
    image: {
        url: "sponsors/zeroplusx.svg",
    },
    social: {
        homepage: "https://www.0x.se/",
        facebook: "0plusx",
        instagram: "",
        twitter: "0plusX",
    },
    location: {
        country: {
            name: "Sweden",
            code: "SE",
        },
        city: "Stockholm",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=zeroplusx.js.map