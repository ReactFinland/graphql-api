"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Shay Keinan",
    about: "Shay is an experienced developer with a rich background in developing complex user interfaces, both for 2D and 3D. Currently Shay works at 500Tech on various projects, trains and consults companies and organizes the ReactJS meetup community.",
    image: {
        url: "people/shay.jpg",
    },
    social: {
        homepage: "",
        twitter: "Shay_Keinan",
        github: "crazypixel",
        linkedin: "shay-keinan",
    },
    location: {
        country: {
            name: "Israel",
            code: "IL",
        },
        city: "Tel Aviv",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.REACT_VR],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=shay-keinan.js.map