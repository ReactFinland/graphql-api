"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Relex",
    about: "Optimize retail for every future",
    image: {
        url: "sponsors/relex.svg",
    },
    social: {
        homepage: "https://www.relexsolutions.com/careers/",
        facebook: "RELEXSolutions",
        twitter: "RelexSolutions",
        linkedin: "relexsolutions",
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
//# sourceMappingURL=relex.js.map