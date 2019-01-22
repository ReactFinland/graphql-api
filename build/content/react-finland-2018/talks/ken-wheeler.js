"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const ken_wheeler_1 = __importDefault(require("../../people/ken-wheeler"));
const talk = {
    people: [ken_wheeler_1.default],
    title: "How React changed everything",
    description: `
This talk will examine how React changed the front end landscape as we know it. We'll start by recounting the pre-React landscape, including prior art. Next, we'll venture into the introduction of React, and its reception and growth.

But most importantly, we will take a look at the core idea of React, and why it transcends language or rendering target and posit on what that means going forward, including what React might look like years from now.
  `,
    type: schema_1.SessionType.KEYNOTE,
    keywords: ken_wheeler_1.default.keywords,
    urls: {
        web: "https://reactfinland.surge.sh/",
    },
};
exports.default = talk;
//# sourceMappingURL=ken-wheeler.js.map