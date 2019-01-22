"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const kadi_kraman_1 = __importDefault(require("../../people/kadi-kraman"));
const talk = {
    people: [kadi_kraman_1.default],
    title: "Mysterious talk",
    description: ``,
    type: schema_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=kadi-kraman.js.map