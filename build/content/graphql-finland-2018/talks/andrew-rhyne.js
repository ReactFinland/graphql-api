"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const andrew_rhyne_1 = __importDefault(require("../../people/andrew-rhyne"));
const talk = {
    people: [andrew_rhyne_1.default],
    title: "Real-time GraphQL with Event Sourcing",
    description: "GraphQL makes real-time easy with it's Subscriptions support, but how easy is it to build a backend that puts real-time data first?  With event sourcing, it's easier than you think!  The ability to easily subscribe to data changes and have blazing-fast reads on our data sets at Gatsby enables our team to build a sophisticated cloud-native offering that is flexible for even the most demanding product requirements.  Join Andrew as he gives a thirty-thousand foot overview of event sourcing and how naturally it fits with GraphQL and subscriptions.",
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/09-andrew-rhyne.pdf",
        video: "https://www.youtube.com/watch?v=wiEUApv9-Qc",
    },
};
exports.default = talk;
//# sourceMappingURL=andrew-rhyne.js.map