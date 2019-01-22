"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const juha_linnanen_1 = __importDefault(require("../../people/juha-linnanen"));
const talk = {
    people: [juha_linnanen_1.default],
    title: "Mysterious React Native talk",
    description: ``,
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.REACT_NATIVE],
};
exports.default = talk;
//# sourceMappingURL=juha-linnanen.js.map