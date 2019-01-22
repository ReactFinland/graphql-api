"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const sara_vieira_1 = __importDefault(require("../../people/sara-vieira"));
const talk = {
    people: [sara_vieira_1.default],
    title: "State Management in React Apps with Apollo Client",
    description: "Apollo has given us freedom and happiness when it comes to managing our data coming from the server but we still had to write code and sometimes a lot of it to manage our local state? Well, what if we managed it with queries too? Sounds too awesome right? Let's learn how to do this with apollo-link-state.",
    type: schema_1.SessionType.TALK,
    keywords: [keywords_1.default.APOLLO, keywords_1.default.GRAPHQL],
    urls: {
        web: "https://link-state-is-dope.now.sh/",
    },
};
exports.default = talk;
//# sourceMappingURL=sara-vieira.js.map