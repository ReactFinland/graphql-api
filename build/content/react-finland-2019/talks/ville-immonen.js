"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const ville_immonen_1 = __importDefault(require("../../people/ville-immonen"));
const talk = {
    people: [ville_immonen_1.default],
    title: "React Standard Library",
    description: `React Native is the tool for building cross platform React apps. To build native-like experiences, we need good APIs providing the native capabilities of each platform in a unified way. Is the answer a standard library for React apps?`,
    type: Session_1.SessionType.TALK,
    keywords: [keywords_1.default.REACT_NATIVE, keywords_1.default.UNIVERSAL_REACT],
    urls: {
        slides: "https://slides.react-finland.fi/2019/ville-immonen.pdf",
        video: "https://www.youtube.com/watch?v=6A9GeBXhPWY",
    },
};
exports.default = talk;
//# sourceMappingURL=ville-immonen.js.map