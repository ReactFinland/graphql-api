"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "React Finland",
    about: "Learn More about React, Explore Finland",
    aboutShort: "Learn More about React, Explore Finland",
    image: {
        url: "react-finland/logo/v2/logo-colored-with-text.svg",
    },
    social: {
        homepage: "https://www.react-finland.fi/",
        github: "ReactFinland",
        medium: "ReactFinland",
        twitter: "ReactFinland",
        youtube: "ReactFinland",
        linkedin: "react-finland",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    type: [Contact_1.ContactType.ORGANIZER],
};
exports.default = sponsor;
//# sourceMappingURL=react-finland.js.map