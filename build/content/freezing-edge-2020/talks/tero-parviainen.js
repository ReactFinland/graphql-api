"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = require("../../../server/schema/Session");
const tero_parviainen_1 = __importDefault(require("../../people/tero-parviainen"));
const talk = {
    people: [tero_parviainen_1.default],
    title: "",
    description: "",
    type: Session_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=tero-parviainen.js.map