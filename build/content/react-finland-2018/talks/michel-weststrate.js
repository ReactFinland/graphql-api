"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const michel_weststrate_1 = __importDefault(require("../../people/michel-weststrate"));
const talk = {
    people: [michel_weststrate_1.default],
    title: "Immer: Immutability made easy",
    description: "Immer is a tiny package that allows you to work with immutable data structures with unprecedented ease. It doesn't require learning new data structures or update APIs, but instead creates a temporarily shadow tree which can be modified using the standard JavaScript APIs. The shadow tree will be used to generate your next immutable state tree. Join this talk to see how to write your reducers in a much more readable way, with half the code and without requiring additional large libraries.",
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.IMMER],
    urls: {
        web: "http://immer.surge.sh/",
    },
};
exports.default = talk;
//# sourceMappingURL=michel-weststrate.js.map