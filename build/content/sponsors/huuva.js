"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Huuva",
    about: "Your favorite restaurants, all in one order",
    image: {
        url: "sponsors/huuva.svg",
    },
    social: {
        homepage: "https://www.huuva.io/software-developer-recruitment",
        linkedin: "huuva",
        instagram: "huuvaio",
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
//# sourceMappingURL=huuva.js.map