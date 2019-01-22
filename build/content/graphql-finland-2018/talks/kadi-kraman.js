"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const kadi_kraman_1 = __importDefault(require("../../people/kadi-kraman"));
const talk = {
    people: [kadi_kraman_1.default],
    title: "Going offline first with GraphQL",
    description: `We live in a world that is online 24/7. Even so, we are reasonably lenient on the web when we're not connected to the internet. However, for mobile apps, not working in flakey connectivity zones is borderline unacceptable. Users expect your app to work offline (though they don't phrase it like that). They really don't care that a network request has failed or is taking a long time. And thankfully, we developers can make it happen.

This talk is about how tooling in GraphQL makes it reasonably straightforward to get your React Native app working offline.`,
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/03-kadi-kraman.pdf",
        video: "https://www.youtube.com/watch?v=i4Cfq7hQiws",
    },
};
exports.default = talk;
//# sourceMappingURL=kadi-kraman.js.map