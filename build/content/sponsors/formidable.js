"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Formidable",
    about: "The JavaScript Consultancy trusted by engineers",
    image: {
        url: "sponsors/formidable.svg",
    },
    social: {
        homepage: "https://formidable.com/",
        github: "formidablelabs",
        linkedin: "company/formidable-labs-inc",
        youtube: "",
        instagram: "",
        twitter: "formidablelabs",
        pinterest: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "Seattle",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=formidable.js.map