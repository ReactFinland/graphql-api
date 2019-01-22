"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const person = {
    name: "Toni Ristola",
    about: "Toni Ristola is a Software Architect at Robu Oy and an organizer for the React Finland conference and contributor for the React Finland App.",
    image: {
        url: "people/toni.png",
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
    type: [schema_1.ContactType.ORGANIZER, schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=toni-ristola.js.map