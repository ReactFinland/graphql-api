"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const artem_sapegin_1 = __importDefault(require("../../people/artem-sapegin"));
const talk = {
    people: [artem_sapegin_1.default],
    title: "Custom CSS is the path to inconsistent UI",
    description: `Custom CSS is the simplest way to make the UI inconsistent, especially if we’re talking about spacing between UI elements, font sizes or colors. When developers have too much freedom in defining the UI, they will do things differently. The issue could be solved by avoiding any custom CSS on the app level and having a set of primitive components that allow developers to glue UI together in a consistent way.`,
    type: Session_1.SessionType.TALK,
    keywords: [keywords_1.default.REACT, keywords_1.default.STYLING],
    urls: {
        slides: "https://slides.react-finland.fi/2019/artem-sapegin.pdf",
        web: "https://stopwritingcss.netlify.com",
        video: "https://www.youtube.com/watch?v=_CsBRkRTzIA",
    },
};
exports.default = talk;
//# sourceMappingURL=artem-sapegin.js.map