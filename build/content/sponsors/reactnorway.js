"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "React Norway",
    about: "The international event for coding inspiration",
    image: {
        url: "sponsors/reactnorway.svg",
    },
    social: {
        homepage: "https://reactnorway.com/",
        facebook: "",
        instagram: "",
        twitter: "reactnorway",
    },
    location: {
        country: {
            name: "Norway",
            code: "NO",
        },
        city: "Larvik",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=reactnorway.js.map