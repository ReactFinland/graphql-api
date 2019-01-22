"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const locations_1 = require("../../locations");
const people_1 = require("../../people");
const workshop = {
    type: schema_1.SessionType.WORKSHOP,
    people: [people_1.michelWeststrate],
    title: "TypeScript: From novice to expert",
    description: `
The JavaScript ecosystem is moving to TypeScript. Fast. This workshop will get you up and running with the basic and more advanced patterns of the language.

Maybe you have a background in static typed languages. In that case will find some common ground in concepts like classes, interfaces and overloading.

TypeScript also has a some unique and powerful features, that fit very well with the dynamic nature of the JavaScript language. In this workshop we will cover them all.

During this full-day workshop we will cover:

- Getting started with TypeScript
- TypeScript. Why? And when (not)?
- Applying TypeScript to existing code bases.
- The basics: Primitives, interfaces, classes, generics.
- Slightly more fancy stuff: field modifiers, unions, overloads.
- 'any', 'never', and 'unknown'. Your buddies for life!
- Strictness settings.
- The cool stuff: type guards, type discrimination, tuples and spreads, mapped types, conditional types, flow analysis, this typing, index signatures.
- Best practices, or: going from how-to-satisfy-the-compiler to: TypeScript-makes-me-write-actually-better-code.
- Beyond TypeScript: crossing the boundaries of static and run-time type checking.

Michel has been working with TypeScript full-time for the last 3 years. He authored several open source libraries (such as MobX and MobX-state-tree) that are written in TypeScript and leverage some of it's finest features.

Pre-requisites: Familiarity with JavaScript and modern syntax features (ES2015).
`,
    keywords: people_1.michelWeststrate.keywords,
    location: locations_1.paasitorni,
};
exports.default = workshop;
//# sourceMappingURL=michel-workshop.js.map