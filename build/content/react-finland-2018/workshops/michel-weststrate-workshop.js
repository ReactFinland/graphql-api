"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const locations_1 = require("../../locations");
const michel_weststrate_1 = __importDefault(require("../../people/michel-weststrate"));
const workshop = {
    type: schema_1.SessionType.WORKSHOP,
    people: [michel_weststrate_1.default],
    title: "State Management",
    description: `In this workshop we will dive into the basics and more advanced usage patterns of Mobx-State-Tree (MST) in combination with React. MST is a tool that helps to model complex problem domains and combines the best features of the modern state technologies out there.

1. The state tree philosophy.
2. Modeling your data structures and state
3. Views & actions
4. Asynchronous processes
5. Composing trees and types
6. Connecting to GraphQL
7. Writing your own middleware`,
    keywords: michel_weststrate_1.default.keywords,
    location: locations_1.valkoinenSali,
};
exports.default = workshop;
//# sourceMappingURL=michel-weststrate-workshop.js.map