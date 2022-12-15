"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "React Summit",
    about: "The Biggest React Conference Worldwide",
    image: {
        url: "sponsors/react-summit.svg",
    },
    social: {
        homepage: "https://reactsummit.com",
        facebook: "",
        twitter: "",
        youtube: "ReactConferences",
    },
    location: {
        country: {
            name: "Netherlands",
            code: "NL",
        },
        city: "Amsterdam",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=reactsummit.js.map