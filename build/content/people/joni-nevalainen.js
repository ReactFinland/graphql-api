"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const person = {
    name: "Joni Nevalainen",
    about: "Joni Nevalainen works on the app.",
    image: {
        url: "people/joni.jpg",
    },
    social: {
        homepage: "",
        twitter: "joninevalainen",
        github: "joni-",
        linkedin: "nevalainenjoni",
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
//# sourceMappingURL=joni-nevalainen.js.map