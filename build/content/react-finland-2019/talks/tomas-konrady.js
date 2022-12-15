"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const tomas_konrady_1 = __importDefault(require("../../people/tomas-konrady"));
const talk = {
    people: [tomas_konrady_1.default],
    title: "React Union: Write once, plug anywhere",
    description: `React is usually responsible for managing the render of the whole application. This talk will be about the different use case in which a React application is divided into several standalone configurable modules.

I am going to show how the React modules can be integrated into diverse CMS platforms such as WordPress or Liferay with help of React Union library.

Then we take a look at state management challenges in this kind of setup and how to solve them with @redux-tools.`,
    type: Session_1.SessionType.TALK,
    keywords: [
        keywords_1.default.CMS,
        keywords_1.default.REACT,
        keywords_1.default.REDUX,
        keywords_1.default.STATE_MANAGEMENT,
        keywords_1.default.LIVE_CODING,
    ],
    urls: {
        slides: "https://slides.react-finland.fi/2019/tomas-konrady.pdf",
        web: "https://finland-2019.firebaseapp.com/",
        video: "https://www.youtube.com/watch?v=gGzGzpaNlx4",
    },
};
exports.default = talk;
//# sourceMappingURL=tomas-konrady.js.map