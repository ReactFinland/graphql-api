"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Mike Berman",
    about: "Engineer @ Facebook, former organizer of Sydney Zombie Walk, & big fan of breakfast foods • 🎹 • ‍🤹 • ⛷ • 🦘🇦🇺‍",
    image: {
        url: "people/mike.jpg",
    },
    social: {
        homepage: "https://berman.xyz",
        twitter: "",
        github: "",
        linkedin: "mikeyberman",
    },
    location: {
        country: {
            name: "Great Britain",
            code: "GB",
        },
        city: "London",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.REDUX],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=mike-berman.js.map