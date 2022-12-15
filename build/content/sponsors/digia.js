"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Digia",
    about: "Smoother digital world",
    image: {
        url: "sponsors/digia.svg",
    },
    social: {
        homepage: "https://digia.com/",
        twitter: "digiaonline",
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
//# sourceMappingURL=digia.js.map