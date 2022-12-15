"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = require("../../../server/schema/Session");
const locations_1 = require("../../locations");
const people_1 = require("../../people");
const workshop = {
    type: Session_1.SessionType.WORKSHOP,
    people: [people_1.michelWeststrate],
    title: "TypeScript for React Developers",
    description: `
  The JavaScript ecosystem is moving to TypeScript. Fast. This workshop will get you up and running with the basic and more advanced patterns of TypeScript. TypeScript has some powerful features, that fit very well with the dynamic nature of the JavaScript language. In this workshop we will cover all the essentials and some of the unique features of TypeScript.

  But beyond that, this is a workshop for React devs! To practice the theory, during the hands-on parts of this workshop we will be migrating an application from plain JavaScript to TypeScript. 
  
  About the author: Michel has been working with TypeScript full-time for the last 3 years. He authored several open source libraries (such as MobX and MobX-state-tree) that are written in TypeScript and leverage some of it's finest features.
  
  Pre-requisites: Familiarity with JavaScript, React and modern syntax features (ES2015).

  > To learn more about TypeScript, [read Michel's interview](https://medium.com/react-finland/interview-typescript-with-michel-weststrate-8afd7fd24b32).

  > It will help if you have [Yarn](https://yarnpkg.com/en/) installed before the workshop. [React to TS conversion example](https://github.com/mweststrate/react-ts-conversion-exercise) requires it as a dependency.
`,
    keywords: people_1.michelWeststrate.keywords,
    location: locations_1.paasitorni,
};
exports.default = workshop;
//# sourceMappingURL=michel-workshop.js.map