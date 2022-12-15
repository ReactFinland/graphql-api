"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "ReactFest",
    about: "A one day open-source ReactJS conference - festival",
    image: {
        url: "sponsors/react-fest.png",
    },
    social: {
        homepage: "https://reactfest.com/",
        youtube: "UCjO-zVjLvkrh8-DT9wZCHTQ",
        github: "ReactFest",
        twitter: "ReactFest",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "London",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=reactfest.js.map