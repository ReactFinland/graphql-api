const enums = require("../src/enums");
const keywords = require("../../keywords");

module.exports = {
  name: "Michał Chudziak",
  about:
    'Lead software engineer in Callstack - company which provides the highest-level consultancy services for React and React Native. Lover of GraphQL\'s simplicity and a big supporter of "learn once, write anywhere" motto.',
  image: "speakers/michal.jpg",
  social: {
    homepage: "http://callstack.com",
    twitter: "michal_chudziak",
    github: "mike866",
    linkedin: "michalchudziak",
  },
  location: {
    country: {
      name: "Poland",
      code: "PL",
    },
    city: "Wrocław",
  },
  keywords: [keywords.REACT, keywords.REACT_NATIVE],
  type: [enums.SPEAKER],
};
