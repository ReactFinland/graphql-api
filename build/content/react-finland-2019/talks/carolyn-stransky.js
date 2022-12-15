"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = require("../../../server/schema/Session");
const carolyn_stransky_1 = __importDefault(require("../../people/carolyn-stransky"));
const talk = {
    people: [carolyn_stransky_1.default],
    title: '"Intuitive" Tooling',
    description: `
  One of the nuances of working in frontend development is constantly being told that [insert whatever tooling, frameworks or technologies here] are "super simple" or "easy to pickup". While on the surface this seems great, the reality is that many of these technologies are riddled with syntax quirks, incomplete documentation and a high barrier to entry. 

  In this talk, we'll discuss why truly intuitive tooling doesn't exist, go over some common misconceptions in the React community and learn more inclusive ways to talk about emerging frontend technologies.
  `,
    type: Session_1.SessionType.TALK,
    keywords: [],
    urls: {
        slides: "https://slides.react-finland.fi/2019/carolyn-stransky.pdf",
        video: "https://www.youtube.com/watch?v=nBy8y39Pvp4",
    },
};
exports.default = talk;
//# sourceMappingURL=carolyn-stransky.js.map