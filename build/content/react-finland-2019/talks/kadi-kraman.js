"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const kadi_kraman_1 = __importDefault(require("../../people/kadi-kraman"));
const talk = {
    people: [kadi_kraman_1.default],
    title: "All aboard the type train",
    description: `JavaScript is a language of add-ons, and one of its more recent trends is typing. There are obvious benefits to typing, but what are the drawbacks? Should you choose Flow or TypeScript? Why use types at all? And why not just go straight to Reason? This session will provide some insight into these questions, peppered with examples from the real world.`,
    type: Session_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.TYPESCRIPT],
    urls: {
        slides: "https://slides.react-finland.fi/2019/kadi-kraman.pdf",
        video: "https://www.youtube.com/watch?v=PkdESWmNZ9o",
    },
};
exports.default = talk;
//# sourceMappingURL=kadi-kraman.js.map