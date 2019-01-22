"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const glenn_reyes_1 = __importDefault(require("../../people/glenn-reyes"));
const talk = {
    people: [glenn_reyes_1.default],
    title: "Building tools for GraphQL",
    description: "Adopting GraphQL can be fairly demanding and it takes some time to find the right tooling. What can we do to improve DX and supercharge our GraphQL development? Let's deep-dive into GraphQL tooling that help us building GraphQL at scale.",
    type: schema_1.SessionType.TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/06-glenn-reyes.pdf",
        video: "https://www.youtube.com/watch?v=BeQ5CjzCaUg",
    },
};
exports.default = talk;
//# sourceMappingURL=glenn-reyes.js.map