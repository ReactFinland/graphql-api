"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const locations_1 = require("../../locations");
const david_khourshid_1 = __importDefault(require("../../people/david-khourshid"));
const workshop = {
    type: schema_1.SessionType.WORKSHOP,
    people: [david_khourshid_1.default],
    title: "Reactive State Machines and Statecharts",
    description: `Managing the many user interface states of an application easily becomes complicated. We'll discover how some historical and important computer science concepts – state machines and statecharts – and a functional + reactive approach can make it much easier to understand, visualize, implement, and automatically create tests for complex user interfaces and flows.`,
    keywords: david_khourshid_1.default.keywords,
    location: locations_1.elisaAppelsiini,
};
exports.default = workshop;
//# sourceMappingURL=david-khourshid-workshop.js.map