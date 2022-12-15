"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "React La Conferencia",
    about: "The First React conference for Spanish speakers in Latin America",
    image: {
        url: "sponsors/rlc.svg",
    },
    social: {
        homepage: "https://reactlaconf.co",
        facebook: "",
        instagram: "",
        twitter: "reactlaconf",
    },
    location: {
        country: {
            name: "Colombia",
            code: "CO",
        },
        city: "Medellín",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=rlc.js.map