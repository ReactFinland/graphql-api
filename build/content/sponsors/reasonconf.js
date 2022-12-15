"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "ReasonConf",
    about: "World’s first Reason conference for web-developers & OCaml enthusiasts",
    image: {
        url: "sponsors/reason-conf.svg",
    },
    social: {
        homepage: "https://www.reason-conf.com/",
        facebook: "ReasonConf-1334078980027448",
        github: "reasonvienna",
        twitter: "reasonconf",
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
//# sourceMappingURL=reasonconf.js.map