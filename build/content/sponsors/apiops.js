"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Apiops Meetup",
    about: "APIOps is about automation of any step of API design, development, onboarding, security or management.",
    image: {
        url: "sponsors/apiops.png",
    },
    social: {
        homepage: "https://www.meetup.com/Apiops-Helsinki/",
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
//# sourceMappingURL=apiops.js.map