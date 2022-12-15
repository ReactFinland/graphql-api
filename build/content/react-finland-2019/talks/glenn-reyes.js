"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const glenn_reyes_1 = __importDefault(require("../../people/glenn-reyes"));
const talk = {
    people: [glenn_reyes_1.default],
    title: "Drawing the line between 3rd party and handcrafted components",
    description: `Often when we write new components, we might be like: Come on, there must be a library out there! And most times there was already someone who faced the same problem... only that it's not quite the same. Should I use the 3rd party lib? Or go with my own? Let's find out the differences and trade-offs in this session.`,
    type: Session_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.REACT, keywords_1.default.LIBRARIES],
    urls: {
        slides: "https://slides.react-finland.fi/2019/glenn-reyes.pdf",
        web: "https://speakerdeck.com/glennreyes/drawing-the-line-between-3rd-party-and-handcrafted-code",
    },
};
exports.default = talk;
//# sourceMappingURL=glenn-reyes.js.map