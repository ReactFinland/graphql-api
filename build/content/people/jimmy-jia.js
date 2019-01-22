"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Jimmy Jia",
    about: "Jimmy is a principal scientist and full-stack developer at Butterfly Network and 4Catalyzer. He is an advocate for GraphQL internally, and is committed to using machine learning and the web to save lives by advancing healthcare technology. He also maintains a number of open-source libraries within the GraphQL ecosystem.",
    image: {
        url: "people/jimmy.jpg",
    },
    social: {
        homepage: "http://www.fashionablenonsense.com/",
        twitter: "jimmy_jia",
        github: "taion",
    },
    location: {
        country: {
            name: "USA",
            code: "US",
        },
        city: "New York",
    },
    keywords: [keywords_1.default.GRAPHQL],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.TALK],
};
exports.default = person;
//# sourceMappingURL=jimmy-jia.js.map