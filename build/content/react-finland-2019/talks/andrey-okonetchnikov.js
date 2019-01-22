"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const andrey_okonetchnikov_1 = __importDefault(require("../../people/andrey-okonetchnikov"));
const talk = {
    people: [andrey_okonetchnikov_1.default],
    title: "Mysterious design talk",
    description: ``,
    type: schema_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=andrey-okonetchnikov.js.map