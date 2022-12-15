"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "Agent Conf",
    about: "The international event for coding inspiration",
    image: {
        url: "sponsors/agent.png",
    },
    social: {
        homepage: "https://www.agent.sh/",
        facebook: "agentsh",
        instagram: "teamagent",
        twitter: "agentconf",
    },
    location: {
        country: {
            name: "Austria",
            code: "AT",
        },
        city: "Dornbirn",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=agentconf.js.map