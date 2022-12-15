"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const person = {
    name: "Bodil Stokke",
    about: "",
    image: {
        url: "people/bodil.jpg",
    },
    social: {
        homepage: "http://bodil.lol",
        twitter: "bodil",
        github: "bodil",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "London",
    },
    keywords: [],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=bodil.js.map