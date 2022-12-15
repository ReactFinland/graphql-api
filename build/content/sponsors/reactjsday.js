"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "ReactJs Day",
    about: "ReactJS Day is a one-day, single track conference in Verona",
    image: {
        url: "sponsors/reactjsday.svg",
    },
    social: {
        homepage: "http://reactjsday.it/",
        facebook: "reactjsday",
        vimeo: "grusp",
        twitter: "reactjsday",
        youtube: "UCdWnwC8nz_CCFQrmLBrLCVw",
    },
    location: {
        country: {
            name: "Italy",
            code: "IT",
        },
        city: "Verona",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=reactjsday.js.map