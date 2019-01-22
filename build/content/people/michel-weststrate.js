"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Michel Weststrate",
    about: "Full-stack tech lead and open source evangelist at Mendix. Author of MobX, MobX-State-Tree and Immer. On a quest to make programming as natural as possible.",
    image: {
        url: "people/michel.jpg",
    },
    social: {
        homepage: "https://medium.com/@mweststrate",
        medium: "@mweststrate",
        twitter: "mweststrate",
        github: "mweststrate",
        linkedin: "michel-weststrate-3558463",
    },
    location: {
        country: {
            name: "Netherlands",
            code: "NL",
        },
        city: "Amsterdam",
    },
    keywords: [
        keywords_1.default.IMMER,
        keywords_1.default.MOBX,
        keywords_1.default.MOBX_STATE_TREE,
        keywords_1.default.REACT,
        keywords_1.default.STATE_MANAGEMENT,
    ],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=michel-weststrate.js.map