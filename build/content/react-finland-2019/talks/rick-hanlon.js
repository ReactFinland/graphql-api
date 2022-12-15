"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const rick_hanlon_1 = __importDefault(require("../../people/rick-hanlon"));
const talk = {
    people: [rick_hanlon_1.default],
    title: "The Untouchable Web",
    description: `The majority of users are now browsing websites primarily using touch devices. In this talk, Rick Hanlon from the React Native team at Facebook shares what React Native has learned about touch devices with web developers, including how to provide a rich user experience today, and where this space is going.`,
    type: Session_1.SessionType.KEYNOTE,
    keywords: [keywords_1.default.REACT_NATIVE, keywords_1.default.REACT],
    urls: {
        slides: "https://slides.react-finland.fi/2019/rick-hanlon.pdf",
        video: "https://www.youtube.com/watch?v=LhKglxQT4sU",
    },
};
exports.default = talk;
//# sourceMappingURL=rick-hanlon.js.map