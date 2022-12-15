"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Design Systems London",
    about: "Open-source conference for the design systems community",
    image: {
        url: "sponsors/designsystemslondon.png",
    },
    social: {
        homepage: "https://www.designsystemslondon.com/",
        twitter: "DSLconf",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "London",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=designsystemslondon.js.map