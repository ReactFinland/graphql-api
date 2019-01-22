"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const michal_chudziak_1 = __importDefault(require("../../people/michal-chudziak"));
const talk = {
    people: [michal_chudziak_1.default],
    title: "World Class experience with React Native",
    description: "A case study of the app I'm currently working on with my team. I'll show you how we managed to set up a friendly environment with the best DX, spot bugs in early stage and deliver continuous builds to QA (just by merging the PR’s). I'll also cover dropping classic state management thanks to apollo-link-state and overcoming react-native and metro-bundler limitations. You can't miss this one!",
    type: schema_1.SessionType.TALK,
    keywords: [keywords_1.default.REACT, keywords_1.default.REACT_NATIVE],
};
exports.default = talk;
//# sourceMappingURL=michal-chudziak.js.map