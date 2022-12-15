"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Futurice",
    about: "You can’t predict the future. Are you prepared to define it?",
    image: {
        url: "sponsors/futurice.svg",
    },
    social: {
        homepage: "https://www.futurice.com/",
        facebook: "futurice",
        github: "futurice",
        linkedin: "company/futurice",
        youtube: "",
        instagram: "",
        twitter: "futurice",
        pinterest: "",
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
//# sourceMappingURL=futurice.js.map