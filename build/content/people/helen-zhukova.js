"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Helen Zhukova",
    about: "Helen creates user interfaces for Web and mobile mainly for live video streaming and video post-production for the movie studios. JavaScript is her first love but she is open to any technologies and skills that give her creations the best look and feel. She is a lifelong learner and loves to share her knowledge.",
    image: {
        url: "people/helen.jpg",
    },
    social: {
        twitter: "zhukova_h",
        github: "zhukovka",
    },
    location: {
        country: {
            name: "Ukraine",
            code: "UA",
        },
        city: "Kiev",
    },
    keywords: [keywords_1.default.GRAPHQL, keywords_1.default.GRAPHQLJS],
    type: [schema_1.ContactType.SPEAKER, schema_1.ContactType.LIGHTNING_TALK],
};
exports.default = person;
//# sourceMappingURL=helen-zhukova.js.map