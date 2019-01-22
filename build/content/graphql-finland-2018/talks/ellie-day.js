"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const ellie_day_1 = __importDefault(require("../../people/ellie-day"));
const talk = {
    people: [ellie_day_1.default],
    title: "Emerging uses of GraphQL for rapid application development",
    description: "GraphQL makes dealing with application data a breeze, especially with open source libraries such as Apollo. However, many schemas simply mirror their RESTful counterparts, limiting their overall usefulness. In this talk I will cover emerging patterns that enable rapid GraphQL-powered application development.",
    type: schema_1.SessionType.TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/02-ellie-day.pdf",
        video: "https://www.youtube.com/watch?v=fdJ0-0TiCQs",
    },
};
exports.default = talk;
//# sourceMappingURL=ellie-day.js.map