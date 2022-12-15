"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "React Day Bangalore",
    about: "A day long React conference dedicated to bringing 500+ react developers together.",
    image: {
        url: "sponsors/bangalore.svg",
    },
    social: {
        homepage: "https://reactday.in",
        twitter: "ReactDayIn",
    },
    location: {
        country: {
            name: "India",
            code: "IN",
        },
        city: "Bangalore",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=bangalore.js.map