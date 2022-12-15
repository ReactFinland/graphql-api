"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "SurviveJS",
    about: "SurviveJS will take you from a JavaScript apprentice to master",
    image: {
        url: "sponsors/survivejs.svg",
    },
    social: {
        homepage: "https://survivejs.com/",
        twitter: "survivejs",
    },
    location: {
        country: {
            name: "Austria",
            code: "AT",
        },
        city: "Vienna",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=survivejs.js.map