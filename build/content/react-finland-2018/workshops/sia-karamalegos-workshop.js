"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = require("../../../server/schema/Session");
const locations_1 = require("../../locations");
const sia_karamalegos_1 = __importDefault(require("../../people/sia-karamalegos"));
const workshop = {
    type: Session_1.SessionType.WORKSHOP,
    people: [sia_karamalegos_1.default],
    title: "Universal React Apps Using Next.js",
    description: `Every user’s hardware is different, and processing speed can hinder user experience on client-side rendered React applications. Server-side rendering and code-splitting can drastically improve user experience by minimizing the work that the client has to do.

  It’s easy to get lost in the lingo, so come learn what it all means and how to easily build universal React apps using the Next.js framework. We’ll walk through the concepts and use code examples to cement your understanding. You’ll get the most out of this session if you’re comfortable with React and ES6 syntax.`,
    keywords: sia_karamalegos_1.default.keywords,
    location: locations_1.elisaAppelsiini,
};
exports.default = workshop;
//# sourceMappingURL=sia-karamalegos-workshop.js.map