"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const nik_graf_1 = __importDefault(require("../../people/nik-graf"));
const talk = {
    people: [nik_graf_1.default],
    title: "Get started with Reason",
    description: "We will kick off with the basics and then quickly go into how to leverage features like variant types and pattern matching to make impossible states impossible. After you gained some knowledge about the basics the course will dig even further into ReasonReact.",
    type: schema_1.SessionType.TALK,
    keywords: [keywords_1.default.REASON, keywords_1.default.REACT],
    urls: {
        web: "https://speakerdeck.com/nikgraf/get-started-with-reason",
    },
};
exports.default = talk;
//# sourceMappingURL=nik-graf.js.map