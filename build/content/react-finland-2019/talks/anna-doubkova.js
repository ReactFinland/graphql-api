"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const anna_doubkova_1 = __importDefault(require("../../people/anna-doubkova"));
const talk = {
    people: [anna_doubkova_1.default],
    title: "Practical Performance for React (Native)",
    description: `There are quite a few theoretical concepts of writing good a React application, including popular functional programming approaches. However, few take into consideration the impacts these will have on performance of the application. In this talk you’ll find out how some commonly used patterns have an adverse effect on the speed of your app, and how to avoid using them. We’ll mainly explore UI and state management but we’ll also dive into some native-specific issues and look at how to prevent them.`,
    type: Session_1.SessionType.TALK,
    keywords: [keywords_1.default.REACT, keywords_1.default.REACT_NATIVE],
    urls: {
        slides: "https://slides.react-finland.fi/2019/anna-doubkova.pdf",
        video: "https://www.youtube.com/watch?v=W2a5_Qn2jVI",
    },
};
exports.default = talk;
//# sourceMappingURL=anna-doubkova.js.map