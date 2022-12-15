"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const tejas_kumar_1 = __importDefault(require("../../people/tejas-kumar"));
const talk = {
    people: [tejas_kumar_1.default],
    title: "Scalable (Design) Systems with TypeScript",
    description: `This session explores creating living documentation for design systems, ensuring consistent documentation at all times using TypeScript.

We will read Markdown files, render components described in them, and expose live type-safe code playgrounds powered by the Monaco Editor. We will, together, explore:

- Static Type Analysis and its value
- The Monaco text editor that powers VS Code
- Connecting it all together with React`,
    type: Session_1.SessionType.TALK,
    keywords: [
        keywords_1.default.REACT,
        keywords_1.default.DESIGN_SYSTEMS,
        keywords_1.default.LIVE_CODING,
        keywords_1.default.MONACO_EDITOR,
        keywords_1.default.TYPESCRIPT,
        keywords_1.default.VS_CODE,
    ],
    urls: {
        slides: "https://slides.react-finland.fi/2019/tejas-kumar.pdf",
        video: "https://www.youtube.com/watch?v=ZsBW4S8hYMU",
    },
};
exports.default = talk;
//# sourceMappingURL=tejas-kumar.js.map