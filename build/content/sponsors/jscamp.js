"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "JSCamp",
    about: "Two-day International Javascript Conference crafted for and by the community. Learn about the latest trends, meet core team members of different frameworks, tooling and more!",
    image: {
        url: "sponsors/jscamp.svg",
    },
    social: {
        homepage: "https://jscamp.tech/",
        facebook: "jscamp",
        youtube: "jscamp",
        twitter: "jscamp",
    },
    location: {
        country: {
            name: "Spain",
            code: "ES",
        },
        city: "Barcelona",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=jscamp.js.map