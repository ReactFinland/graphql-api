const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [
    require("../../people/andrey-okonetchnikov"),
    require("../../people/artem-sapegin"),
  ],
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
  /*tickets: [
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
  ],*/
  keywords: [
    ...new Set(
      require("../../people/andrey-okonetchnikov").keywords,
      require("../../people/artem-sapegin").keywords
    ),
  ],
  location: require("../../locations")["paasitorni"],
};
