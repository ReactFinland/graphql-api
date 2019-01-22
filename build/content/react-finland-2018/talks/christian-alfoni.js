"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const christian_alfoni_1 = __importDefault(require("../../people/christian-alfoni"));
const talk = {
    people: [christian_alfoni_1.default],
    title: "Declarative state and side effects",
    description: "Writing declarative code for our UIs is so common that we do not even think about it. But when it comes to writing logic for managing state and side effects it requires a lot of discipline to get the same benefits. We are going to talk about how we can get help writing our business logic in a declarative manner and see what benefits it gives us.",
    type: schema_1.SessionType.TALK,
    keywords: christian_alfoni_1.default.keywords,
};
exports.default = talk;
//# sourceMappingURL=christian-alfoni.js.map