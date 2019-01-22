"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const locations_1 = require("../../locations");
const andrey_okonetchnikov_1 = __importDefault(require("../../people/andrey-okonetchnikov"));
const artem_sapegin_1 = __importDefault(require("../../people/artem-sapegin"));
const workshop = {
    type: schema_1.SessionType.WORKSHOP,
    people: [andrey_okonetchnikov_1.default, artem_sapegin_1.default],
    title: "Design Systems for React Developers",
    description: `Development of digital products is a complex process that involves multiple stakeholders and roles: managers, designers, engineers, QA, and customers. This increases the communication overhead, slows down the process, and oftentimes results and less than ideal user experience.

- How to communicate design ideas between different stakeholders effectively?
- How to deliver consistent UI without constant supervising?
- How to ensure same problems not being solved multiple times?

Design systems offer a systematic approach to the process of product creation. This approach establishes an organization-wide design language that can be backed into a UI library and the styleguide and becomes the single source of truth for the entire organization. Component libraries and living styleguides encourage reuse, promote consistency, improve team productivity, help to identify common patterns and solve similar problems only once.

This workshop will show you how to:

  - Understand what a design system is and how to start thinking in design constraints
  - Analyze and split your UI into small reusable components
  - Setup an environment to create components in isolation
  - Create a living style guide and start building a component library
  - Structure your application around components
  - Write maintainable styles for your components based on the design system`,
    keywords: [
        keywords_1.default.REACT,
        keywords_1.default.STYLING,
        keywords_1.default.STYLE_GUIDES,
        keywords_1.default.TOOLING,
    ],
    location: locations_1.paasitorni,
};
exports.default = workshop;
//# sourceMappingURL=andrey-and-artem-workshop.js.map