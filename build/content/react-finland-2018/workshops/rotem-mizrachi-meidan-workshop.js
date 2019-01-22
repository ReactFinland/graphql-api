"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const locations_1 = require("../../locations");
const rotem_mizrachi_meidan_1 = __importDefault(require("../../people/rotem-mizrachi-meidan"));
const workshop = {
    type: schema_1.SessionType.WORKSHOP,
    people: [rotem_mizrachi_meidan_1.default],
    title: "Advanced E2E Testing with Detox",
    description: `In this workshop we will get to know the cool features hidden in Detox. By getting to know how Detox works and what makes it deterministic, you will be able write better and more stable tests.

You will either build a demo app to experiment with its features (basic and advanced), or work on your existing app’s test suite.
  
We will experiment with the following:

1. Running app against mock server
2. Mocking mechanisms: permissions, user notifications
3. Understanding synchronization issues
4. Debugging failed tests
5. Stabilizing E2E builds in CI`,
    keywords: rotem_mizrachi_meidan_1.default.keywords,
    location: locations_1.valkoinenSali,
};
exports.default = workshop;
//# sourceMappingURL=rotem-mizrachi-meidan-workshop.js.map