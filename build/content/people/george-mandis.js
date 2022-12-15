"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const person = {
    name: "George Mandis",
    about: "Independent web developer and consultant, frequent traveler, occasional educator, perpetual optimist. Google Developer Expert in Web Technologies",
    image: {
        url: "people/george.jpg",
    },
    social: {
        homepage: "https://george.mand.is",
        twitter: "georgeMandis",
        github: "georgemandis",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "Portland",
    },
    keywords: [],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=george-mandis.js.map