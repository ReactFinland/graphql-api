"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const glenn_reyes_1 = __importDefault(require("../../people/glenn-reyes"));
const talk = {
    people: [glenn_reyes_1.default],
    title: "Mysterious talk",
    description: ``,
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=glenn-reyes.js.map