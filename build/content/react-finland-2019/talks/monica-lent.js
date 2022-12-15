"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const monica_lent_1 = __importDefault(require("../../people/monica-lent"));
const talk = {
    people: [monica_lent_1.default],
    title: "Building resilient frontend architecture",
    description: `Change is inevitable. So is legacy. And too often, we as developers (who love to solve problems by coding) fall into the trap of believing the only way to fix it is by rewriting everything again and again. But how can we design an application architecture that is more resilient to change in the first place? In this talk we’ll look at specific techniques you can use today to keep your app from turning into that infamous ball of mud.`,
    type: Session_1.SessionType.TALK,
    keywords: [keywords_1.default.CODE_QUALITY, keywords_1.default.TOOLING, keywords_1.default.ARCHITECTURE],
    urls: {
        slides: "https://slides.react-finland.fi/2019/monica-lent.pdf",
        video: "https://www.youtube.com/watch?v=brMZLmZ1HR0",
    },
};
exports.default = talk;
//# sourceMappingURL=monica-lent.js.map