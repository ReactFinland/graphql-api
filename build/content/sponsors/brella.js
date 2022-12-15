"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Brella",
    about: "The world's leading virtual event platform",
    image: {
        url: "sponsors/brella.svg",
    },
    social: {
        homepage: "https://www.brella.io/",
        facebook: "brellanetwork",
        twitter: "brellanetwork",
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
//# sourceMappingURL=brella.js.map