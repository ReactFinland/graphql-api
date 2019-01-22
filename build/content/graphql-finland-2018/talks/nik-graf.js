"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const nik_graf_1 = __importDefault(require("../../people/nik-graf"));
const talk = {
    people: [nik_graf_1.default],
    title: "Reason and GraphQL",
    description: `Using Reason's type inference we can create GraphQL servers with 100% type coverage. Regardless if we compile to Node.js or native binaries using Reason we can do this with ease.

Besides that Reason shines even more so on the client. Send one quick introspection request and you get full autocompletion on your schema right in the browser.`,
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/11-nik-graf.pdf",
        video: "https://www.youtube.com/watch?v=tUIvl2pe8CQ",
    },
};
exports.default = talk;
//# sourceMappingURL=nik-graf.js.map