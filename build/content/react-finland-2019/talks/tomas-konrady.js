"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const tomas_konrady_1 = __importDefault(require("../../people/tomas-konrady"));
const talk = {
    people: [tomas_konrady_1.default],
    title: "Mysterious CMS talk",
    description: ``,
    type: schema_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=tomas-konrady.js.map