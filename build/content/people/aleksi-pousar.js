"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const person = {
    name: "Aleksi Pousar",
    about: "Aleksi Pousar works on the app and is the treasurer of the association.",
    image: {
        url: "people/aleksi.jpg",
    },
    social: {
        homepage: "https://aleksipousar.fi",
        twitter: "AleksiPousar",
        github: "stoneman1",
        linkedin: "aleksipousar",
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
//# sourceMappingURL=aleksi-pousar.js.map