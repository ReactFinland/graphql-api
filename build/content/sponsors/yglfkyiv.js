"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "YGLF Kyiv",
    about: "Community event built by developers for developers",
    image: {
        url: "sponsors/yglf.jpg",
    },
    social: {
        homepage: "http://yglf.com.ua/",
        facebook: "yglf.kyiv",
        twitter: "yglf_kyiv",
        youtube: "UCU-fOxx_kT5OARG0KiksiCA",
    },
    location: {
        country: {
            name: "Ukraine",
            code: "UA",
        },
        city: "Kiev",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=yglfkyiv.js.map