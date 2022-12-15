"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Koodia Suomesta",
    about: "Finnish code is known for its superior quality. Now it can be easily recognized.",
    image: {
        url: "sponsors/koodiasuomesta.svg",
    },
    social: {
        homepage: "https://koodiasuomesta.fi/en/",
        facebook: "",
        instagram: "",
        twitter: "koodiasuomesta",
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
//# sourceMappingURL=koodiasuomesta.js.map