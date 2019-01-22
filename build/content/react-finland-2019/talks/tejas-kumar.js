"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const tejas_kumar_1 = __importDefault(require("../../people/tejas-kumar"));
const talk = {
    people: [tejas_kumar_1.default],
    title: "Mysterious case study",
    description: ``,
    type: schema_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=tejas-kumar.js.map