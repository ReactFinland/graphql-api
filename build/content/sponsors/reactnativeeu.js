"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const sponsor = {
    name: "React Native EU",
    about: "First community conference in Europe, focused exclusively on React Native. Community, core contributors, insights, networking and tons of knowledge.",
    image: {
        url: "sponsors/react-native-eu.svg",
    },
    social: {
        homepage: "https://react-native.eu/",
        twitter: "react_native_eu",
    },
    location: {
        country: {
            name: "Poland",
            code: "PL",
        },
        city: "Wrocław",
    },
    type: [Contact_1.ContactType.SPONSOR],
};
exports.default = sponsor;
//# sourceMappingURL=reactnativeeu.js.map