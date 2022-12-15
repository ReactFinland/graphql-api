"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = require("../../../server/schema/Session");
const george_mandis_1 = __importDefault(require("../../people/george-mandis"));
const talk = {
    people: [george_mandis_1.default],
    title: "",
    description: "",
    type: Session_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=george-mandis.js.map