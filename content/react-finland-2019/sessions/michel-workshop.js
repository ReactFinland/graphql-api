const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [require("../../people/michel-weststrate")],
  title: "TypeScript: From novice to expert",
  description: `
The JavaScript Eco System is moving to TypeScript. Fast. This workshop will get you up and running with the basic and more advanced patterns of TypeScript. Maybe you have a background in static typed languages. In that case will find some common ground in concepts like classes, interfaces and overloading. But TypeScript also has a some unique and powerful features, that fit very well with the dynamic nature of the JavaScript language. In this workshop we will cover them all.

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
  /*tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/gjzhvxpdmuu",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/ype-9yteewo",
    },
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/zcsd4ygn7jo",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/766bgaavf-q",
    },
  ],*/
  keywords: require("../../people/michel-weststrate").keywords,
  location: require("../../locations")["paasitorni"],
};
