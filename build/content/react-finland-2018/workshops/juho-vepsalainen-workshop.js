"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const locations_1 = require("../../locations");
const juho_vepsalainen_1 = __importDefault(require("../../people/juho-vepsalainen"));
const workshop = {
    type: schema_1.SessionType.WORKSHOP,
    people: [juho_vepsalainen_1.default],
    title: "Webpack - The Good Parts",
    description: `In this high-level overview you'll learn how to configure Webpack. Even if you know it already, there might be some surprises in store as you gain insight to the tool you otherwise might miss.

The topics covered include:

* Fundamental ideas of webpack
* Development techniques
* Build techniques
* Asset management
* Bundle/code splitting
* Build analysis
* Optimizing the build`,
    keywords: juho_vepsalainen_1.default.keywords,
    location: locations_1.elisaAppelsiini,
};
exports.default = workshop;
//# sourceMappingURL=juho-vepsalainen-workshop.js.map