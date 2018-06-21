const enums = require("../../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Jimmy Jia",
  about:
    "Jimmy is a principal scientist and full-stack developer at Butterfly Network and 4Catalyzer. He is an advocate for GraphQL internally, and is committed to using machine learning and the web to save lives by advancing healthcare technology. He also maintains a number of open-source libraries within the GraphQL ecosystem.",
  image: "graphql-finland-2018/speakers/jimmy.jpg",
  social: {
    homepage: "http://www.fashionablenonsense.com/",
    twitter: "@jimmy_jia",
    github: "taion",
  },
  location: {
    country: {
      name: "USA",
      code: "US",
    },
    city: "New York",
  },
  keywords: [keywords.GRAPHQL],
  type: [enums.SPEAKER, enums.TALK],
};
