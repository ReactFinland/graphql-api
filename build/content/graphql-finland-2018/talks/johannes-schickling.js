"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const johannes_schickling_1 = __importDefault(require("../../people/johannes-schickling"));
const talk = {
    people: [johannes_schickling_1.default],
    title: "End-to-end type-safety with GraphQL",
    description: `GraphQL is becoming the new standard for API development and shows rapid adoption both on the client and server. This talk dives deep into one of the most powerful features of GraphQL - its type-system. See how GraphQL can be used to enable end-to-end type-safety across any language, making your application architecture more resilient and easier to evolve.`,
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/08-johannes-schickling.pdf",
        video: "https://www.youtube.com/watch?v=5JuSXwFSJn4",
    },
};
exports.default = talk;
//# sourceMappingURL=johannes-schickling.js.map