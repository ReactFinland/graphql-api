"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const bruno_lourenco_1 = __importDefault(require("../../people/bruno-lourenco"));
const talk = {
    people: [bruno_lourenco_1.default],
    title: "Mysterious animation talk",
    description: ``,
    type: schema_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=bruno-lourenco.js.map