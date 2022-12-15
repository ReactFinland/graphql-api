"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "WebExpo",
    about: "The web event of the year",
    image: {
        url: "sponsors/webexpo.png",
    },
    social: {
        homepage: "https://www.webexpo.net/",
        facebook: "WebExpo",
        twitter: "webexpo",
        medium: "webexpo",
    },
    location: {
        country: {
            name: "Czech Republic",
            code: "CZ",
        },
        city: "Prague",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=webexpo.js.map