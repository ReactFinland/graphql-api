"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const person = {
    name: "Olavi Haapala",
    about: "Software Developer at Futurice helping clients build fast and accessible experiences on the web. Passionate about web performance and accessibility.",
    image: {
        url: "people/olavi.jpg",
    },
    social: {
        homepage: "https://olavihaapala.fi",
        twitter: "0lpeh",
        github: "olpeh",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "olavi-haapala-b7b752162",
        youtube: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=olavi.js.map