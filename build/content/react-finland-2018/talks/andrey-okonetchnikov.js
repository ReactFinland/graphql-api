"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const andrey_okonetchnikov_1 = __importDefault(require("../../people/andrey-okonetchnikov"));
const talk = {
    people: [andrey_okonetchnikov_1.default],
    title: "Make linting great again!",
    description: `No other topic in software development probably has so much controversy as linting. 
  
With a wrong workflow linting can be really a pain and will slow you and your team down. With a proper setup, though, it can save you hours of manual work reformatting the code and reducing the code-review overhead.
  
This talk is a quick introduction into how [🚫💩 lint-staged](https://github.com/okonet/lint-staged) — a node.js library I created and maintain — can improve developer experience in historically pita field — linting. 
  
Coupled with tools that analyze and improve the code like ESLint, Stylelint, Prettier and Jest, you'll witness how much difference can a small tool like this make.`,
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.CODE_QUALITY, keywords_1.default.LINTING],
};
exports.default = talk;
//# sourceMappingURL=andrey-okonetchnikov.js.map