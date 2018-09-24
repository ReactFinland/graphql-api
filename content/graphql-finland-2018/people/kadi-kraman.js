const enums = require("../../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Kadi Kraman",
  about:
    "Kadi is a Software Engineer at Formidable, JavaScript enthusiast, believer in open source and a huge fan of sticking JavaScript on every possible platform.",
  image: "graphql-finland-2018/speakers/kadi.jpg",
  social: {
    twitter: "kadikraman",
    github: "kadikraman",
  },
  location: {
    country: {
      name: "Estonia",
      code: "EE",
    },
    city: "London",
  },
  keywords: [keywords.GRAPHQL],
  type: [enums.SPEAKER, enums.LIGHTNING_TALK],
};
