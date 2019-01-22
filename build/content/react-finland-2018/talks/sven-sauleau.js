"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const sven_sauleau_1 = __importDefault(require("../../people/sven-sauleau"));
const talk = {
    people: [sven_sauleau_1.default],
    title: "Understanding the differences is accepting",
    description: "I want to show you that the unexpected JavaScript things you encountered are understandable by humans and formally specified.",
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: sven_sauleau_1.default.keywords,
    urls: {
        web: "http://understanding-the-differences-is-accepting.ralf.cc/",
    },
};
exports.default = talk;
//# sourceMappingURL=sven-sauleau.js.map