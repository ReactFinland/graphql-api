"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const locations_1 = require("../../locations");
const sara_vieira_1 = __importDefault(require("../../people/sara-vieira"));
const workshop = {
    type: schema_1.SessionType.WORKSHOP,
    people: [sara_vieira_1.default],
    title: "Testing React",
    description: `In this workshop I will be going through unit testing in Javascript, how you can make it fun and meaningful for your app.

We will start by learning all the things about unit tests and how to implement very simple tests for your functions.

We will then move to React/React Native territory and learn about snapshot testing and components testing to keep regressions from happening.

By the end, we will implement all of this in continuous development with GitHub and Travis so you can leave with the exact idea on how to go about implementing extensive tests in your app without shedding a single tear.`,
    keywords: sara_vieira_1.default.keywords,
    location: locations_1.valkoinenSali,
};
exports.default = workshop;
//# sourceMappingURL=sara-vieira-workshop.js.map