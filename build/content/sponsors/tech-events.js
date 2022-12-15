"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "TechEvents.online",
    about: "1000+ videos from leading Tech Events about Saas, Big Data, Lean UX, Virtual Reality and AI. Watch your next one. Boost your expertise.",
    image: {
        url: "sponsors/tech-events.png",
    },
    social: {
        homepage: "https://www.techevents.online/",
        facebook: "techevents.online",
        instagram: "techevents.online",
        twitter: "TechEventOnline",
    },
    location: {
        country: {
            name: "Netherlands",
            code: "NL",
        },
        city: "Amsterdam",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=tech-events.js.map