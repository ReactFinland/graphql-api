"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const person = {
    name: "Tuuli Tiilikainen",
    about: "",
    image: {
        url: "people/tuuli.jpg",
    },
    social: {
        homepage: "https://www.columbiaroad.com/people/tuuli-tiilikainen",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
    },
    keywords: [],
    type: [schema_1.ContactType.ORGANIZER],
};
exports.default = person;
//# sourceMappingURL=tuuli-tiilikainen.js.map