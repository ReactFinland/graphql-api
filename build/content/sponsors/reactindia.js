"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "React India",
    about: "The international React.js conference in Goa",
    image: {
        url: "sponsors/react-india.svg",
    },
    social: {
        homepage: "https://www.reactindia.io/",
        twitter: "react_india",
        facebook: "ReactJSIndia",
    },
    location: {
        country: {
            name: "India",
            code: "IN",
        },
        city: "Goa",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=reactindia.js.map