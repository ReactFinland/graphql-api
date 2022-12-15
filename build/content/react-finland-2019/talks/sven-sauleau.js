"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const sven_sauleau_1 = __importDefault(require("../../people/sven-sauleau"));
const talk = {
    people: [sven_sauleau_1.default],
    title: "WebAssembly - The Next Big Platform",
    description: `JavaScript has had the monopoly on the web for quite some time now. What if, for performance reasons or preference, you want to use another language on the web or mix them?

WebAssembly is the right tool for the job! I want to demonstrate how you can write parts of your React application using Rust and related tools. To complete the demonstration, the code will be deployed on Cloudflare's serverless platform.

Rust ecosystem offers many great tools to work with WebAssembly on the web. These include DOM manipulation, JavaScript bindings and so on, and you will learn more about them in the talk.`,
    type: Session_1.SessionType.LIGHTNING_TALK,
    keywords: [
        keywords_1.default.LIVE_CODING,
        keywords_1.default.REACT,
        keywords_1.default.RUST,
        keywords_1.default.SERVERLESS,
        keywords_1.default.WEB_ASSEMBLY,
    ],
    urls: {
        slides: "https://slides.react-finland.fi/2019/sven-sauleau.pdf",
        video: "https://www.youtube.com/watch?v=8xhLsVVqchg",
    },
};
exports.default = talk;
//# sourceMappingURL=sven-sauleau.js.map