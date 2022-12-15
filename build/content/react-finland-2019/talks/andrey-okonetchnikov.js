"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const andrey_okonetchnikov_1 = __importDefault(require("../../people/andrey-okonetchnikov"));
const talk = {
    people: [andrey_okonetchnikov_1.default],
    title: "A Common Design Language. Let Designers and Developers talk to each other.",
    description: `“Should designers code?” or “Should coders design?”—these two eternal questions are being asked for years with no particular answer given.

- How to let developers know what typography style or button variance they should be using on this particular screen?
- How to ensure that the whole UI is consistent?
- How to let designers know that some screen design doesn’t fit the requirements and needs to be updated?

In order to answer those questions designers and developers have to speak the same language. But what language should it be? 

UI components and pattern libraries can provide this intermediate abstraction and be a common language for both designers and developers.`,
    type: Session_1.SessionType.TALK,
    keywords: [keywords_1.default.DESIGN_SYSTEMS],
    urls: {
        slides: "https://slides.react-finland.fi/2019/andrey-okonetchnikov.pdf",
        web: "https://speakerdeck.com/okonet/a-common-design-language",
        video: "https://www.youtube.com/watch?v=a6DtiGhKMdk",
    },
};
exports.default = talk;
//# sourceMappingURL=andrey-okonetchnikov.js.map