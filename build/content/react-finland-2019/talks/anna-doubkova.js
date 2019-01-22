"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const anna_doubkova_1 = __importDefault(require("../../people/anna-doubkova"));
const talk = {
    people: [anna_doubkova_1.default],
    title: "Mysterious case study",
    description: ``,
    type: schema_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=anna-doubkova.js.map