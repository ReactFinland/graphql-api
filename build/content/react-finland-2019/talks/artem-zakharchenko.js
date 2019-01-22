"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const artem_zakharchenko_1 = __importDefault(require("../../people/artem-zakharchenko"));
const talk = {
    people: [artem_zakharchenko_1.default],
    title: "Mysterious styling talk",
    description: ``,
    type: schema_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=artem-zakharchenko.js.map