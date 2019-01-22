"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const maaret_pyhajarvi_1 = __importDefault(require("../../people/maaret-pyhajarvi"));
const talk = {
    people: [maaret_pyhajarvi_1.default],
    title: "Mysterious testing talk",
    description: ``,
    type: schema_1.SessionType.TALK,
    keywords: [],
};
exports.default = talk;
//# sourceMappingURL=maaret-pyhajarvi.js.map