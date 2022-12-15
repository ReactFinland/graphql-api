"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const bohdan_liashenko_1 = __importDefault(require("../../people/bohdan-liashenko"));
const talk = {
    people: [bohdan_liashenko_1.default],
    title: "Codecrumbs in React",
    description: `The granular approach of designing components helps us to build reusable and encapsulated features. On another hand, it also makes a codebase much more complex by extra added abstractions and drastically increased amount of source code files. How can we navigate the maze of hundreds of React-atoms now? Join my talk to get the answer.`,
    type: Session_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.TOOLING],
    urls: {
        slides: "https://slides.react-finland.fi/2019/bohdan-liashenko.pdf",
        web: "https://docs.google.com/presentation/d/1Uj_5wyafZnp-BaSHzEne02gSxKJgmmjQK9M6mG1fi3k/edit#slide=id.p",
        video: "https://www.youtube.com/watch?v=S_1-1jzLxm4",
    },
};
exports.default = talk;
//# sourceMappingURL=bohdan-liashenko.js.map