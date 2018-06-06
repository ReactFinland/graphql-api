const keywords = require("../keywords");

module.exports = {
  speakers: [
    require("../people/andrey-okonetchnikov"),
    require("../people/artem-sapegin"),
  ],
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
  tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/psj-1zlofwo",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/qvu9ipia14e",
    },
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/ip0xmn7dg2q",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/vll01sed0uq",
    },
  ],
  keywords: [
    ...new Set(
      require("../people/andrey-okonetchnikov").keywords,
      require("../people/artem-sapegin").keywords
    ),
  ],
  location: require("../locations/valkoinen-sali"),
};
