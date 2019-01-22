"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Rotem Mizrachi-Meidan",
    about: "Rotem is a Software Engineer, open source advocate, passionate about Android, React Native, mobile performance, writing developer tools and Lego! In his current position at Wix, Rotem is working with React Native, writing infrastructure and testing tools.",
    image: {
        url: "people/rotem.jpg",
    },
    social: {
        homepage: "",
        twitter: "rotemmiz",
        github: "rotemmiz",
        linkedin: "rotem-mizrachi-meidan-a2306a14",
    },
    location: {
        country: {
            name: "Israel",
            code: "IL",
        },
        city: "Tel Aviv",
    },
    keywords: [
        keywords_1.default.DETOX,
        keywords_1.default.REACT,
        keywords_1.default.REACT_NATIVE,
        keywords_1.default.TESTING,
        keywords_1.default.TOOLING,
    ],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=rotem-mizrachi-meidan.js.map