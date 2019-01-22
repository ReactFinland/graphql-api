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
    title: "Styleguide-driven Development",
    description: `Web applications becoming bigger and more complex, and as they grow, the complexity of the User Interface, arguably the most important part of your application, increases. And with it, your responsibility as a UI developer.

  A traditional development workflow — change code, refresh the app in the browser, click-click-click to reproduce the desired state, repeat — doesn't work anymore. Tools like React hot loader make it faster but don't really fix the underlying issue.

  This workshop will help you:

  * Understand what a design system is and how to start thinking in design constraints
  * Analyze and split your UI into small reusable components
  * Setup an environment to create components in isolation
  * Create a living style guide and start building a component library
  * Structure your application around components
  * Write maintainable styles for your components based on the design system`,
    keywords: [
        keywords_1.default.REACT,
        keywords_1.default.STYLING,
        keywords_1.default.STYLE_GUIDES,
        keywords_1.default.TOOLING,
    ],
    location: locations_1.valkoinenSali,
};
exports.default = workshop;
//# sourceMappingURL=andrey-and-artem-workshop.js.map