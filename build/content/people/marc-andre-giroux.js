"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Marc-André Giroux",
    about: "A Jazz guitarist turned developer, Marc-André is currently working at GitHub, where he is trying to help building better APIs. He is currently writing a book, [The Little Book of GraphQL Design](https://book.graphqlschemadesign.com/). When he's not hacking on or thinking about GraphQL, you might find him throwing heavy weights above his head.",
    aboutShort: "A Jazz guitarist turned developer, Marc-André is currently working at GitHub, where he is trying to help building better APIs. He is currently writing a book, The Little Book of GraphQL Design.",
    image: {
        url: "people/marc.jpg",
    },
    social: {
        homepage: "http://mgiroux.me/",
        twitter: "__xuorig__",
        github: "xuorig",
    },
    location: {
        country: {
            name: "Canada",
            code: "CA",
        },
        city: "Montreal",
    },
    keywords: [keywords_1.default.GRAPHQL, keywords_1.default.GRAPHQLJS],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.WORKSHOP_HOST],
};
exports.default = person;
//# sourceMappingURL=marc-andre-giroux.js.map