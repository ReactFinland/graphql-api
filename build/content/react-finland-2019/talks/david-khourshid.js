"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const david_khourshid_1 = __importDefault(require("../../people/david-khourshid"));
const talk = {
    people: [david_khourshid_1.default],
    title: "Mind-Reading with Adaptive and Intelligent UIs in React",
    description: `What if you could predict user behavior with smart UIs? In this talk, we will explore how we can make adaptive and intelligent UIs in React that learn from how individual users use your apps, and personalize the interface and features just for them, in real-time. With probability-driven statecharts, decision trees, reinforcement learning and more, UIs can be developed in such a way that it automatically adapts to the user's behavior.`,
    type: Session_1.SessionType.TALK,
    keywords: [
        keywords_1.default.STATE_MACHINES,
        keywords_1.default.REINFORCEMENT_LEARNING,
        keywords_1.default.ARTIFICIAL_INTELLIGENCE,
        keywords_1.default.USER_INTERFACE,
    ],
    urls: {
        web: "https://slides.com/davidkhourshid/mind-reading-react-finland#/",
        video: "https://www.youtube.com/watch?v=ppvi09LIUnU",
    },
};
exports.default = talk;
//# sourceMappingURL=david-khourshid.js.map