"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const dustin_schau_1 = __importDefault(require("../../people/dustin-schau"));
const talk = {
    people: [dustin_schau_1.default],
    title: "Gatsby + Themes: The Future of Gatsby",
    description: `Themes ease learning curves and reduce the time to a deployable app. Want to get that great blog written, but don’t want to spend the time creating a bunch of components and UI details? Themes. Themes allow you to focus on what matters: delivering compelling experiences for your end users. Themes are coming very soon to Gatsby, and this talk will do a deep dive on what they are, how to use them, and the types of amazing content you can create easily with a framework that people love: Gatsby.`,
    type: Session_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.GATSBY, keywords_1.default.STATIC_SITE_GENERATION],
    urls: {
        slides: "https://slides.react-finland.fi/2019/dustin-schau.pdf",
        web: "https://dschau.dev/gatsbythemes",
        video: "https://www.youtube.com/watch?v=SV2zu9FvUTw",
    },
};
exports.default = talk;
//# sourceMappingURL=dustin-schau.js.map