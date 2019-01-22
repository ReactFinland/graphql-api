"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Patrick Stapfer",
    about: "Patrick Stapfer is a JavaScript Software Engineer and freelancer, mostly known for his contributions to the Flow type checker ecosystem and his recent work at Runtastic, where he spent most of his time working on the Mobile News Feed feature (built in React Native). Most of his Open Source time is dedicated to the ReasonML and OCaml platform to build robust, type-safe JS applications.",
    image: {
        url: "people/patrick.jpg",
    },
    social: {
        homepage: "",
        twitter: "ryyppy",
        github: "ryyppy",
        linkedin: "patrick-stapfer-5ba205a4",
    },
    location: {
        country: {
            name: "Austria",
            code: "AT",
        },
        city: "Vienna",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.REASON],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=patrick-stapfer.js.map