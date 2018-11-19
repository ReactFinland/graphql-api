const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Rick Hanlon",
  about:
    "Engineer @Facebook · Core @fbjest 🃏 · http://my.pronoun.is/he  · fly and fresh · EST. AKRON",
  image: "people/rick.jpg",
  social: {
    homepage: "https://rickhanlon.codes/",
    twitter: "rickhanlonii",
    github: "rickhanlonii",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Manhattan, New York",
  },
  keywords: [keywords.REACT, keywords.TESTING, keywords.TOOLING],
  type: [enums.SPEAKER],
};
