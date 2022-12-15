"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Reaktor",
    about: "We realize visions.",
    image: {
        url: "sponsors/reaktor.svg",
    },
    social: {
        homepage: "https://www.reaktor.com/",
        facebook: "",
        github: "reaktor",
        linkedin: "company/reaktor_",
        instagram: "",
        twitter: "ReaktorNow",
        youtube: "",
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
//# sourceMappingURL=reaktor.js.map