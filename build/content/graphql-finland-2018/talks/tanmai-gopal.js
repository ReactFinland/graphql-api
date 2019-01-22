"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const tanmai_gopal_1 = __importDefault(require("../../people/tanmai-gopal"));
const talk = {
    people: [tanmai_gopal_1.default],
    title: "Writing a realtime GraphQL backend as a compiler in Haskell",
    description: `At Hasura, we’ve been building a high-performance GraphQL backend that can handle a large number of subscription connections. We took a few interesting approaches to tackle this problem, and in this talk I’ll go over the key architectural decisions, programming constructs and of course the unforeseen implementation pitfalls we ran into. I’ll also cover tools from the Haskell ecosystem that made this possible. These are some of the topics I’ll touch upon:

* Fast GraphQL parsing with parser combinators
* Modelling and manipulating the GraphQL AST with algebraic data types
* Software Transactional Memory: Concurrency constructs for scaling graphql subscriptions
`,
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/13-tanmai-gopal.pdf",
        video: "https://www.youtube.com/watch?v=bQLwmYFdCFQ",
    },
};
exports.default = talk;
//# sourceMappingURL=tanmai-gopal.js.map