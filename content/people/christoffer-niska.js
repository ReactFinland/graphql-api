const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Christoffer Niska",
  about:
    "Tech leader with a passion for programming. Head of Tech at @digiaonline. Father of four. Open Source enthusiast. JavaScript Ninja. GraphQL evangelist.",
  image: "speakers/crisu.jpg",
  social: {
    twitter: "Crisu83",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [keywords.GRAPHQL],
  type: [enums.SPEAKER, enums.LIGHTNING_TALK],
};
