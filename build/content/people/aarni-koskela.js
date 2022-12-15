"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const person = {
    name: "Aarni Koskela",
    about: "Aarni works on the site and the app. Specializes in terrible puns.",
    image: {
        url: "people/aarni.jpg",
    },
    social: {
        homepage: "",
        twitter: "akx",
        github: "akx",
        linkedin: "aarni",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
    },
    keywords: [],
    type: [Contact_1.ContactType.ORGANIZER],
};
exports.default = person;
//# sourceMappingURL=aarni-koskela.js.map