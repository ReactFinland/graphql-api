"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const luca_matteis_1 = __importDefault(require("../../people/luca-matteis"));
const talk = {
    people: [luca_matteis_1.default],
    title: "Append-only development with React",
    description: `Behavioral Programming is a new paradigm that changes how we think about developing software. Programs are constructed in an incremental-fashion where newly added code can change how old code is executed. In this talk I will explain this paradigm in the context of developing a React app. Furthermore I will show how changes can be made to the app without having to understand how old code was written; hence I describe this method as "append-only development". `,
    type: Session_1.SessionType.TALK,
    keywords: [
        keywords_1.default.BEHAVIORAL_PROGRAMMING,
        keywords_1.default.REACT,
        keywords_1.default.GENERATORS,
        keywords_1.default.EVENTS,
    ],
    urls: {
        slides: "https://slides.react-finland.fi/2019/luca-matteis.pdf",
        web: "https://lmatteis.github.io/finland-talk/assets/player/KeynoteDHTMLPlayer.html",
        video: "https://www.youtube.com/watch?v=cXuvCMG21Ss",
    },
};
exports.default = talk;
//# sourceMappingURL=luca-matteis.js.map