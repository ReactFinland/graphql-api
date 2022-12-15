"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "typeof",
    about: "typeof is a web craftsmanship conference",
    image: {
        url: "sponsors/typeof.svg",
    },
    social: {
        homepage: "https://typeofconf.com/",
        facebook: "typeofconf",
        twitter: "typeofconf",
        instagram: "typeofconf",
    },
    location: {
        country: {
            name: "Portugal",
            code: "PT",
        },
        city: "Porto",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=typeof.js.map