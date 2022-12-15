"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = require("../../../server/schema/Session");
const manuel_matuzovic_1 = __importDefault(require("../../people/manuel-matuzovic"));
const talk = {
    people: [manuel_matuzovic_1.default],
    title: "12 Tips For More Accessible React Apps",
    description: `If you want to improve the accessibility of your React apps but you don't know how or where to start, this talk is just what you need. Manuel shares 12 tips that will help you build web sites and applications that can be used by anyone. Each tip fits on one slide and you'll be able to put them into practice right away without having to learn anything fundamentally new. The tips include testing, HTML, JS techniques, and general best practices.`,
    type: Session_1.SessionType.TALK,
    keywords: [],
    urls: {
        slides: "https://slides.react-finland.fi/2019/manuel-matuzovic.pdf",
        web: "https://www.matuzo.at/blog/12-tips-for-more-accessible-react-apps-slides-react-finland-2019/",
        video: "https://www.youtube.com/watch?v=NL6XKcX4sxc",
    },
};
exports.default = talk;
//# sourceMappingURL=manuel-matuzovic.js.map