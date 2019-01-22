"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Ken Wheeler",
    about: "Ken is the Director of Open Source at Formidable, the author of several popular open source libraries, and a frequent conference speaker often focusing on alternative uses of React.\n\nHe is the creator of libraries such as Spectacle, react-music, react-game-kit and Webpack Dashboard. He also maintains a healthy Twitter presence, and enjoys red meat, whiskey and recreational archery.",
    image: {
        url: "people/ken.jpg",
    },
    social: {
        homepage: "",
        twitter: "ken_wheeler",
        github: "kenwheeler",
        linkedin: "kennywheeler",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "Allenwood",
    },
    keywords: [keywords_1.default.REACT],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=ken-wheeler.js.map