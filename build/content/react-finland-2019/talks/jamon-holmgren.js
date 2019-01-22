"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const jamon_holmgren_1 = __importDefault(require("../../people/jamon-holmgren"));
const talk = {
    people: [jamon_holmgren_1.default],
    title: "Mysterious Ignite talk",
    description: ``,
    type: schema_1.SessionType.TALK,
    keywords: [keywords_1.default.REACT_NATIVE],
};
exports.default = talk;
//# sourceMappingURL=jamon-holmgren.js.map