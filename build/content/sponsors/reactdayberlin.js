"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "React Day Berlin",
    about: "Fully Packed Day of Your Favorite React Content",
    image: {
        url: "sponsors/react-day-berlin.png",
    },
    social: {
        homepage: "https://reactday.berlin/",
        facebook: "reactdayberlin",
        twitter: "reactdayberlin",
        youtube: "UC1EYHmQYBUJjkmL6OtK4rlw",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Berlin",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=reactdayberlin.js.map