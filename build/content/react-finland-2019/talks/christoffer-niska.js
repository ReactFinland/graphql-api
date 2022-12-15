"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const christoffer_niska_1 = __importDefault(require("../../people/christoffer-niska"));
const talk = {
    people: [christoffer_niska_1.default],
    title: "Releasing a library written in TypeScript on NPM",
    description: `Most of us have used or at least heard about TypeScript, but how many have released a React library written in TypeScript on NPM?

  In this session we will take a look at the tooling required and some best practices for publishing a library using TypeScript and Rollup.`,
    type: Session_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.NPM, keywords_1.default.TYPESCRIPT],
    urls: {
        slides: "https://slides.react-finland.fi/2019/christoffer-niska.pdf",
        video: "https://www.youtube.com/watch?v=T_4CCdkN468",
    },
};
exports.default = talk;
//# sourceMappingURL=christoffer-niska.js.map