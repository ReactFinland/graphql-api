"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Utopia Music",
    about: "Fair pay for every play",
    image: {
        url: "sponsors/utopia.svg",
    },
    social: {
        homepage: "https://utopiamusic.com/",
        facebook: "likeutopiamusic",
        instagram: "likeutopiamusic",
        twitter: "likeutopiamusic",
        linkedin: "like-utopia-music",
        youtube: "UCoH3gEveto-ta-qqBmfCnUg",
    },
    location: {
        country: {
            name: "Switzerland",
            code: "CH",
        },
        city: "Zug",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=utopia.js.map