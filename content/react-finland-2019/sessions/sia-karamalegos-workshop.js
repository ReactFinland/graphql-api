const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [require("../../people/sia-karamalegos")],
  title: "Get in the Fast Lane: Measuring React Performance",
  description: `Are you losing revenue to performance? 53% of mobile site visits are abandoned if a page takes longer than 3 seconds to load. Pinterest reduced load times by 40% and saw a 15% increase in sign ups. Starbucks implemented a 2x faster time to interactive resulting in a 65% increase in rewards registrations. AliExpress reduced load by 36% and saw a 10.5% increase in orders.

Performance is important. Tooling can be hard. Do flame charts intimidate you? Come learn how to audit and fix common performance issues in React apps using the React Profiler, Chrome DevTools, Lighthouse, PageSpeed Insights, and webpagetest.org. During this hands-on, full-day workshop, you will learn how to:

- Optimize and familiarize yourself with your DevTools environment, including the React Profiler 
- Understand which metrics matter 
- Measure the performance of existing applications
- Diagnose and prioritize performance problems
- Implement performance fixes 

We will profile real applications to both learn the tools of measurement as well as see real performance problems in action. By the end of this workshop, you will be familiar with the following performance concepts. Many will be covered in-depth with exercises, and others will be covered in an overview with resources to learn more.

- Latency and loading:  HTTP2, code splitting, caching and service workers, resource and priority hints, progressive rendering and lazy loading, third party scripts
- Reducing code: tree shaking, responsible imports, performance budgets, differential serving
- Assets: responsive images, font loading, network client hints
- Buttery smooth UI:  long-running JavaScript
- Perceived performance and UX

**Prerequisites**: To attend this workshop, you must already have a working understanding of React and JavaScript in addition to HTML, CSS, and the command line. You must also have a basic understanding of Chrome DevTools, including inspecting an element and using the console. You do not need advanced mastery of DevTools as we will be learning about the Network and Performance tabs plus other tools during this session. A basic understanding of webpack would also be helpful but is not required.

**Preparation**: Please come with a laptop ready for development. You must have Chrome, the [React DevTools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en), and Node (v 8+) installed.
`,
  /*tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/kmogtpeshgs",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/y11c-klqvss",
    },
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/c4g-t75rfog",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/m3kenzkowg0",
    },
  ],*/
  keywords: require("../../people/sia-karamalegos").keywords,
  location: require("../../locations")["paasitorni"],
};
