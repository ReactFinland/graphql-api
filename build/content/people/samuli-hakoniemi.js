"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const person = {
    name: "Samuli Hakoniemi",
    about: "",
    image: {
        url: "people/samuli.jpg",
    },
    social: {
        homepage: "",
        twitter: "zvona",
        github: "zvona",
        linkedin: "",
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
//# sourceMappingURL=samuli-hakoniemi.js.map