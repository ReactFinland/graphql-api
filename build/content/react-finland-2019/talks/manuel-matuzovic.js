"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const manuel_matuzovic_1 = __importDefault(require("../../people/manuel-matuzovic"));
const talk = {
    people: [manuel_matuzovic_1.default],
    title: "Mysterious accessibility talk",
    description: ``,
    type: schema_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=manuel-matuzovic.js.map