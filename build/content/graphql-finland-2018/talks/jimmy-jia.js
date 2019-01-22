"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const jimmy_jia_1 = __importDefault(require("../../people/jimmy-jia"));
const talk = {
    people: [jimmy_jia_1.default],
    title: "Building efficient, waterfall-free GraphQL applications",
    description: `GraphQL makes it easy to query your back end efficiently. However, when building large applications, this is not always enough on its own. For these larger projects, it’s easy to run into situations where requests still wait on each other, to the detriment of user experience. In this talk, we’ll explore how these problems arise, and look at strategies for mitigating these problems.`,
    type: schema_1.SessionType.TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/05-jimmy-jia.pdf",
        video: "https://www.youtube.com/watch?v=sgWQX0dzJFI",
    },
};
exports.default = talk;
//# sourceMappingURL=jimmy-jia.js.map