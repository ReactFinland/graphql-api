const enums = require("../../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Kadi Kraman",
  about: "",
  image: "speakers/kadi.jpg",
  social: {
    twitter: "kadikraman",
    github: "kadikraman",
  },
  location: {
    country: {
      name: "UK",
      code: "UK",
    },
    city: "London",
  },
  keywords: [keywords.GRAPHQL, keywords.CMS],
  type: [enums.SPEAKER, enums.LIGHTNING_TALK],
};
