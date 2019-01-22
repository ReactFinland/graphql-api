"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const david_khourshid_1 = __importDefault(require("../../people/david-khourshid"));
const talk = {
    people: [david_khourshid_1.default],
    title: "Mysterious talk",
    description: ``,
    type: schema_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=david-khourshid.js.map