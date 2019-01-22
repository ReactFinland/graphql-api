"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const eloy_duran_1 = __importDefault(require("../../people/eloy-duran"));
const talk = {
    people: [eloy_duran_1.default],
    title: "Where art thou, my error?",
    description: "",
    type: schema_1.SessionType.TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/14-eloy-duran.pdf",
        video: "https://www.youtube.com/watch?v=qKA-n8p-sNc",
    },
};
exports.default = talk;
//# sourceMappingURL=eloy-duran.js.map