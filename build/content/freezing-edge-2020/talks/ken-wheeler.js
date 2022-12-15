"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = require("../../../server/schema/Session");
const ken_wheeler_1 = __importDefault(require("../../people/ken-wheeler"));
const talk = {
    people: [ken_wheeler_1.default],
    title: "",
    description: "",
    type: Session_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=ken-wheeler.js.map