"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const nik_graf_1 = __importDefault(require("../../people/nik-graf"));
const talk = {
    people: [nik_graf_1.default],
    title: "Un(popular) Opinions",
    description: `Unpopular opinions are mostly popular opinions people post on Twitter and share them as an unpopular opinion. Some unpopular opinions though are really unpopular for a good reason. Doesn’t make sense to you? Neither to me.`,
    type: Session_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.REACT],
    urls: {
        slides: "https://slides.react-finland.fi/2019/nik-graf.pdf",
        video: "https://www.youtube.com/watch?v=c9YtmMi-5rM",
    },
};
exports.default = talk;
//# sourceMappingURL=nik-graf.js.map