"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const gant_laborde_1 = __importDefault(require("../../people/gant-laborde"));
const talk = {
    people: [gant_laborde_1.default],
    title: "React Native Ignite",
    description: "Life can be simple again. Haven’t we built the same house, or given the same haircut over and over? 80% of mobile app development is the same old song. So why is mobile so difficult/expensive? It’s not with React Native.\n\nLet's look at how simple it is to get started in React Native using Ignite CLI. Using Ignite, you can jump in with a popular combination of technologies, OR brew your own. Ignite is the freedom to learn and automate your mobile app.",
    type: schema_1.SessionType.TALK,
    keywords: gant_laborde_1.default.keywords,
    urls: {
        web: "https://slides.com/gantlaborde/bowser",
    },
};
exports.default = talk;
//# sourceMappingURL=gant-laborde.js.map