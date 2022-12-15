"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "BeJS",
    about: "The JavaScript conference in Brussels",
    image: {
        url: "sponsors/bejs.svg",
    },
    social: {
        homepage: "https://www.bejs.io/conf?utm_source=Partners&utm_campaign=LaunchCampaign&utm_medium=reactfinland",
        twitter: "BeJS_",
    },
    location: {
        country: {
            name: "Belgium",
            code: "BE",
        },
        city: "Brussels",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=bejs.js.map