"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const patrick_hund_1 = __importDefault(require("../../people/patrick-hund"));
const talk = {
    people: [patrick_hund_1.default],
    title: "Get Rich Quick With React Context",
    description: `
With React 16.3, the context API has been completely revamped. This talk will demonstrate a good use 
case for context: Putting ad placements on your web page to *get rich quick!* You'll learn how easy 
it is to use context now and how to migrate your old context code to the new API.
  `,
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: patrick_hund_1.default.keywords,
    urls: {
        web: "https://technology-ebay-de.github.io/get-rich-quick-with-react-context/#/",
    },
};
exports.default = talk;
//# sourceMappingURL=patrick-hund.js.map