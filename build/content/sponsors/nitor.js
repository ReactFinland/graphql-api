"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Nitor",
    about: "Digital engineering",
    image: {
        url: "sponsors/nitor.svg",
    },
    social: {
        homepage: "https://www.nitor.com/en",
        facebook: "NitorCreations",
        github: "NitorCreations",
        linkedin: "company/nitor-creations-ltd",
        instagram: "nitorcreations",
        twitter: "nitorcreations",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=nitor.js.map