const keywords = require("../keywords");

module.exports = {
  speakers: [require("../people/sia-karamalegos")],
  title: "Universal React Apps Using Next.js",
  description: `Every user’s hardware is different, and processing speed can hinder user experience on client-side rendered React applications. Server-side rendering and code-splitting can drastically improve user experience by minimizing the work that the client has to do.

  It’s easy to get lost in the lingo, so come learn what it all means and how to easily build universal React apps using the Next.js framework. We’ll walk through the concepts and use code examples to cement your understanding. You’ll get the most out of this session if you’re comfortable with React and ES6 syntax.`,
  tickets: [
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
  ],
  keywords: require("../people/sia-karamalegos").keywords,
  location: require("../locations/elisa-appelsiini"),
};
