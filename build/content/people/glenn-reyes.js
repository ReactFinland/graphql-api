"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Glenn Reyes",
    about: "Glenn is a front-end Engineer, who builds modern user interfaces and apps with React & GraphQL, loves OSS, co-organizes ReactVienna meetups, and plays JM music on guitar.",
    image: {
        url: "people/glenn.jpg",
    },
    social: {
        homepage: "https://glennreyes.com/",
        twitter: "glnnrys",
        github: "glennreyes",
    },
    location: {
        country: {
            name: "Austria",
            code: "AT",
        },
        city: "Vienna",
    },
    keywords: [keywords_1.default.GRAPHQL, keywords_1.default.GRAPHQLJS],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.TALK],
};
exports.default = person;
//# sourceMappingURL=glenn-reyes.js.map