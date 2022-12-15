"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const farzad_yz_1 = __importDefault(require("../../people/farzad-yz"));
const talk = {
    people: [farzad_yz_1.default],
    title: "Abstract component modeling in React",
    description: `Often when we need to develop user interfaces, we model the interface behaviour based on a visual design or the platform we ship onto. However, since the behaviour of the component is the same, it would be beneficial to find a practical way to share this behaviour between different platforms, styling systems, state containers, data transmitters and any other sort of integrations.
    
In this talk, I'll be showing a set of techniques to model a semi complicated React component, independent from the common integrations.`,
    type: Session_1.SessionType.LIGHTNING_TALK,
    keywords: [
        keywords_1.default.STATE_MANAGEMENT,
        keywords_1.default.STATECHARTS,
        keywords_1.default.HEADLESS_COMPONENTS,
    ],
    urls: {
        slides: "https://slides.react-finland.fi/2019/farzad-yz.pdf",
        web: "https://abstract-component-modeling.netlify.com",
        video: "https://www.youtube.com/watch?v=AVb5dURO6q0",
    },
};
exports.default = talk;
//# sourceMappingURL=farzad-yz.js.map