"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const person = {
    name: "Anna Doubková",
    about: "Senior software engineer at Hive.",
    image: {
        url: "people/anna.jpg",
    },
    social: {
        twitter: "lithinn",
        github: "lithin",
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
//# sourceMappingURL=anna-doubkova.js.map