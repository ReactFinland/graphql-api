"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Wunder",
    about: "Shaping the Digital Experience",
    image: {
        url: "sponsors/wunder.svg",
    },
    social: {
        homepage: "https://wunder.io/",
        facebook: "wunder.io",
        twitter: "Wunder_io",
        linkedin: "company/wunder.io",
        youtube: "UCsBoaJt5sX12IFBu1giXZJg",
        instagram: "wunder.io",
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
//# sourceMappingURL=wunder.js.map