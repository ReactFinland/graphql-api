"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const artem_zakharchenko_1 = __importDefault(require("../../people/artem-zakharchenko"));
const talk = {
    people: [artem_zakharchenko_1.default],
    title: "Creating layouts that last",
    description: `What if we could wield layout composition as an actual React component? Spoiler: that would solve the #1 issue that prevents our layouts from being truly reusable.`,
    type: Session_1.SessionType.TALK,
    keywords: [keywords_1.default.CSS_GRID, keywords_1.default.LAYOUT, keywords_1.default.REACT],
    urls: {
        video: "https://www.youtube.com/watch?v=_HrXUB97xQs",
    },
};
exports.default = talk;
//# sourceMappingURL=artem-zakharchenko.js.map