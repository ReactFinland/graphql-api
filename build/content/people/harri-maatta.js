"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const person = {
    name: "Harri Määttä",
    about: "Mobile Developer. Also DevOps Specialist. Otherwise nice guy. Lives in Helsinki, so can help with local issues (=I know bars!)",
    image: {
        url: "people/harri.jpg",
    },
    social: {
        homepage: "",
        twitter: "HarriMaatta",
        github: "HarriMaatta",
        linkedin: "harrimaatta",
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
//# sourceMappingURL=harri-maatta.js.map