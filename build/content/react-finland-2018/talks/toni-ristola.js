"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const toni_ristola_1 = __importDefault(require("../../people/toni-ristola"));
const talk = {
    people: [toni_ristola_1.default],
    title: "React Finland App - Lessons learned",
    description: "The first app that we could publish to App Store and play store, and what we learned on the way.",
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: toni_ristola_1.default.keywords,
};
exports.default = talk;
//# sourceMappingURL=toni-ristola.js.map