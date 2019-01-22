"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const shay_keinan_1 = __importDefault(require("../../people/shay-keinan"));
const talk = {
    people: [shay_keinan_1.default],
    title: "ReactVR",
    description: "WebVR enables web developers to create frictionless, immersive experiences. We’ll explore the core concepts behind VR, see different demonstrations, learn how to get started with React VR and how to add new features from the Three.js library.",
    type: schema_1.SessionType.TALK,
    keywords: shay_keinan_1.default.keywords,
};
exports.default = talk;
//# sourceMappingURL=shay-keinan.js.map