"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const locations_1 = require("../../locations");
const people_1 = require("../../people");
const workshop = {
    type: schema_1.SessionType.WORKSHOP,
    people: [people_1.davidKhourshid],
    title: "Modeling React Applications with Statecharts",
    description: `Statecharts are a powerful, well-established formalism that describe even the most complex application behavior and logic in a visual, hierarchical, and deterministic way. In this workshop you will learn about finite state machines and statecharts, and apply them to real-life React applications in ways that will increase productivity and eliminate entire classes of possible bugs from your code.  You will also learn how to:

- Refactor React applications of any size to use statecharts, piece by piece
- Auto-generate full integration tests
- Visualize application logic
- Analyze statecharts to determine which user flows can be optimized
- Identify all possible edge cases
- Apply late-breaking changes and requirements methodically
- Auto-generate designs of all possible component states with Storybook
- Use advanced features of XState`,
    keywords: people_1.davidKhourshid.keywords,
    location: locations_1.paasitorni,
};
exports.default = workshop;
//# sourceMappingURL=david-khourshid-workshop.js.map