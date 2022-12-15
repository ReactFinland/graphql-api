"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Verkkokauppa",
    about: "Most likely always cheaper",
    image: {
        url: "sponsors/verkkokauppa.svg",
    },
    social: {
        homepage: "https://www.verkkokauppa.com/",
        facebook: "verkkokauppacom",
        instagram: "verkkokauppacom",
        twitter: "Verkkokauppacom",
        youtube: "VerkkokauppaCom",
        linkedin: "company/verkkokauppa.com",
        vk: "verkkokauppa_com",
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
//# sourceMappingURL=verkkokauppa.js.map