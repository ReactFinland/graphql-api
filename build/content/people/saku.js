"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Saku Tihveräinen",
    about: `Saku is a Talent Acquisition Lead with over ten years of experience from the field. Alongside the work, Saku works gradually his way through the PhD ("how professionals choose jobs"). When not working, you can find him by the junior football pitch or jogging on the shores of Helsinki.`,
    image: {
        url: "people/saku.jpg",
    },
    social: {
        homepage: "",
        twitter: "SakuTihverainen",
        github: "",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "sakutihverainen",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=saku.js.map