"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const dan_schafer_1 = __importDefault(require("../../people/dan-schafer"));
const talk = {
    people: [dan_schafer_1.default],
    title: "The Prehistory of GraphQL",
    description: "",
    type: schema_1.SessionType.KEYNOTE,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/16-dan-schafer.pdf",
        video: "https://www.youtube.com/watch?v=6NYC-k2Abow",
    },
};
exports.default = talk;
//# sourceMappingURL=dan-schafer.js.map