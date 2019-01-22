"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const locations_1 = require("../../locations");
const gant_laborde_1 = __importDefault(require("../../people/gant-laborde"));
const workshop = {
    type: schema_1.SessionType.WORKSHOP,
    people: [gant_laborde_1.default],
    title: "React Native",
    description: `In this beginner workshop you will learn what React Native (RN) consists of, how to write basic applications, how to use Storybook with RN, how to test RN, and finally how to kickstart your own project.`,
    keywords: gant_laborde_1.default.keywords,
    location: locations_1.valkoinenSali,
};
exports.default = workshop;
//# sourceMappingURL=gant-laborde-workshop.js.map