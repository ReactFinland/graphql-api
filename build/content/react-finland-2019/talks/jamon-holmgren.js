"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const jamon_holmgren_1 = __importDefault(require("../../people/jamon-holmgren"));
const talk = {
    people: [jamon_holmgren_1.default],
    title: "Building a Community Around Ignite",
    description: `In this talk, Jamon will go into what it took to build a thriving developer community around the popular React Native CLI and boilerplate, Ignite.`,
    type: Session_1.SessionType.TALK,
    keywords: [keywords_1.default.REACT_NATIVE],
    urls: {
        slides: "https://slides.react-finland.fi/2019/jamon-holmgren.pdf",
        web: "https://infinite-red.slides.com/infinitered/react-finland-2019?token=m2ZLCaid",
        video: "https://www.youtube.com/watch?v=gTG8_9Zv0YI",
    },
};
exports.default = talk;
//# sourceMappingURL=jamon-holmgren.js.map