"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const bruno_lourenco_1 = __importDefault(require("../../people/bruno-lourenco"));
const talk = {
    people: [bruno_lourenco_1.default],
    title: "Delightful UI animations by understanding the brain",
    description: `Check out the world’s award-winning websites—what do they all have in common? Animations! They have elements that move and change. When done well, animations can amaze us.
  But why are some animations delightful while others are so annoying? The answer could be in how our brain perceives motion.

  Understanding this could be the key to confidently adding animations to our websites and apps.
  Animations with code seem hard, but they shouldn’t be. In this talk, I will give some tips and explore some tools to simplify creating animations in React.`,
    type: Session_1.SessionType.TALK,
    keywords: [keywords_1.default.ANIMATION, keywords_1.default.REACT],
    urls: {
        video: "https://www.youtube.com/watch?v=TszRBCc6DQ4",
    },
};
exports.default = talk;
//# sourceMappingURL=bruno-lourenco.js.map