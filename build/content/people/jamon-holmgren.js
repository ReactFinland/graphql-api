"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Jamon Holmgren",
    about: "Founder & CTO @infinitered (http://infinite.red). Software engineer (JS, React/React Native, Node, Ruby, Elixir), Lutheran, husband, dad to 4.",
    image: {
        url: "people/jamon.jpg",
    },
    social: {
        homepage: "https://jamonholmgren.com/",
        twitter: "jamonholmgren",
        github: "jamonholmgren",
        facebook: "",
        medium: "jamonholmgren",
        instagram: "",
        linkedin: "jamonholmgren",
        youtube: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "Vancouver",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.REACT_NATIVE],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=jamon-holmgren.js.map