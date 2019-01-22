"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const christoffer_niska_1 = __importDefault(require("../../people/christoffer-niska"));
const talk = {
    people: [christoffer_niska_1.default],
    title: "graphql-php",
    description: "",
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/12-christoffer-niska.pdf",
        video: "https://www.youtube.com/watch?v=WDGj0zbEjL8",
    },
};
exports.default = talk;
//# sourceMappingURL=christoffer-niska.js.map