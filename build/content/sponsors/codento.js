"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Codento",
    about: "A Change Agent's Right Hand.",
    image: {
        url: "sponsors/codento.png",
    },
    social: {
        homepage: "https://www.codento.fi/en/",
        twitter: "codento",
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
//# sourceMappingURL=codento.js.map