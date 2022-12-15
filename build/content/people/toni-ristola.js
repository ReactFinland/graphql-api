"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const person = {
    name: "Toni Ristola",
    about: "Toni Ristola is a Software Architect at Robu Oy and an organizer for the React Finland conference and contributor for the React Finland App.",
    image: {
        url: "people/toni.jpg",
    },
    social: {
        homepage: "",
        twitter: "toniristola",
        github: "tristola",
        linkedin: "toniristola",
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
//# sourceMappingURL=toni-ristola.js.map