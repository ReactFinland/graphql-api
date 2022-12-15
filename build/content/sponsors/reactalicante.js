"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "React Alicante",
    about: "The international React.js conference in Spain",
    image: {
        url: "sponsors/react-alicante.svg",
    },
    social: {
        homepage: "http://reactalicante.es/",
        twitter: "reactalicante",
    },
    location: {
        country: {
            name: "Spain",
            code: "ES",
        },
        city: "Alicante",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=reactalicante.js.map