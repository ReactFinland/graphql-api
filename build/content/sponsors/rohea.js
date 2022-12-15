"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Rohea",
    about: "ROHEA is a Finnish tech company that makes demanding software simple, scalable and usable for everyday needs.",
    image: {
        url: "sponsors/rohea.png",
    },
    social: {
        homepage: "http://www.rohea.com/",
        twitter: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=rohea.js.map