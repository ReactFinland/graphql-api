"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const patrick_stapfer_1 = __importDefault(require("../../people/patrick-stapfer"));
const talk = {
    people: [patrick_stapfer_1.default],
    title: "Making Unreasonable States Impossible",
    description: "Based on @nikgraf's introduction to Reason (Get started with Reason), this talk goes deeper into the world of variant types and pattern matching and puts them into a practical context. You will learn how these tools help you design solid APIs, which are impossible to misuse by consumers. Additionally you will get more insights into practical ReasonReact code.",
    type: schema_1.SessionType.TALK,
    keywords: patrick_stapfer_1.default.keywords,
    urls: {
        web: "https://speakerdeck.com/ryyppy/making-unreasonable-states-impossible",
    },
};
exports.default = talk;
//# sourceMappingURL=patrick-stapfer.js.map