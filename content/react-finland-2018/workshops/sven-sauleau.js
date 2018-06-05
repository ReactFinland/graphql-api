const keywords = require("../keywords");

module.exports = {
  speakers: [require("../people/sven-sauleau")],
  title: "Babel",
  description: `
You will learn how to refactor your React code effectively in this workshop by Sven Sauleau, one of the core developers of Babel. He will discuss the following topics:

* How and why JSX syntax works?
* How to create your first Babel plugin?
* How to perform type analysis?

[Read your own refactoring tool](https://www.xtuc.fr/notes/your-own-refactoring-tool.html) article to learn more!
`,
  tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/qpyc-sqbve8",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/5rvtwbn2vwk",
    },
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/mwnem2nw1su",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/zcy5fb8uidi",
    },
  ],
  keywords: require("../people/sven-sauleau").keywords,
  location: require("../locations/elisa-appelsiini"),
};
