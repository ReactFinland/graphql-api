"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = require("../../../server/schema/Session");
const patrick_ecker_1 = __importDefault(require("../../people/patrick-ecker"));
const talk = {
    people: [patrick_ecker_1.default],
    title: "",
    description: "",
    type: Session_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=patrick-stapfer.js.map