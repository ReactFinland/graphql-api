"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Kasia Jastrzębska",
    about: "Frontend developer with over 6 years of experience around various frameworks and libs knowledge in my basket (such as React+Redux, Polymer, Ember, Backbone). Always eager to go deeper ;D",
    image: {
        url: "people/kasia.jpg",
    },
    social: {
        homepage: "",
        twitter: "kejt_bw",
        github: "kajas90",
        linkedin: "kasia-jastrzębska-8369a664",
    },
    location: {
        country: {
            name: "Poland",
            code: "PL",
        },
        city: "Gdansk",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.SSR, keywords_1.default.STYLING],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=kasia-jastrzebska.js.map