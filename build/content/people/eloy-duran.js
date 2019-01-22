"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Eloy Durán",
    about: "Eloy works at Artsy, where they’ve been using GraphQL in novel ways since its inception. Being big on ‘OSS by default’, for instance creating CocoaPods, he came to the JavaScript ecosystem from a native background via React Native and chose Relay as the place where in the React/GraphQL community he can best contribute.",
    image: {
        url: "people/eloy.png",
    },
    social: {
        twitter: "alloy",
        github: "alloy",
    },
    location: {
        country: {
            name: "Netherlands",
            code: "NL",
        },
        city: "Amsterdam",
    },
    keywords: [keywords_1.default.GRAPHQL],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=eloy-duran.js.map