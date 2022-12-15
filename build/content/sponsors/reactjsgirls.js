"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "ReactJS Girls",
    about: "A conference for every React developer where women take the stage",
    image: {
        url: "sponsors/reactjsgirls.svg",
    },
    social: {
        homepage: "https://reactjsgirls.com/",
        twitter: "reactjsgirls",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "London",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=reactjsgirls.js.map