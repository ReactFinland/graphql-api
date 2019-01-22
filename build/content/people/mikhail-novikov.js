"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Mikhail Novikov",
    about: "Mikhail is a GraphQL hipster. He started GraphQL startup before GraphQL was ever public. The startup failed, but Mikhail has been active in GraphQL community ever since, working on tools like Schema Stitching and Apollo Launchpad. He is one of the organizers of GraphQL Finland.",
    aboutShort: "Mikhail is a GraphQL hipster. He started GraphQL startup before GraphQL was ever public. After that he worked on tools like Schema Stitching and Apollo Launchpad and taught GraphQL at multiple workshops.",
    image: {
        url: "people/mikhail.jpg",
    },
    social: {
        homepage: "https://freiksenet.com",
        twitter: "freiksenet",
        github: "freiksenet",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [keywords_1.default.GRAPHQL, keywords_1.default.CMS],
    type: [schema_1.ContactType.WORKSHOP_HOST, schema_1.ContactType.ORGANIZER],
};
exports.default = person;
//# sourceMappingURL=mikhail-novikov.js.map