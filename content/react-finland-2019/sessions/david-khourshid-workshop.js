const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [require("../../people/david-khourshid")],
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
  /*tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/meyhplcurh8",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/e5849f-srk8",
    },
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/mdzr1bwzkr8",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/duwuhyzgmq8",
    },
  ],*/
  keywords: require("../../people/david-khourshid").keywords,
  location: require("../../locations")["paasitorni"],
};
