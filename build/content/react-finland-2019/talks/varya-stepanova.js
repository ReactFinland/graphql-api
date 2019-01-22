"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const varya_stepanova_1 = __importDefault(require("../../people/varya-stepanova"));
const talk = {
    people: [varya_stepanova_1.default],
    title: "Mysterious talk",
    description: ``,
    type: schema_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=varya-stepanova.js.map