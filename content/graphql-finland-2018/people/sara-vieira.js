const enums = require("../../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Sara Vieira",
  about:
    "Front-End Developer at @YLDio, open sorcerer, maker of useless modules, Blogger, Drummer and horror movie fan girl.",
  image: "graphql-finland-2018/speakers/sara.jpg",
  social: {
    homepage: "https://iamsaravieira.com/",
    twitter: "NikkitaFTW",
    github: "SaraVieira",
    linkedin: "saravieira1",
  },
  location: {
    country: {
      name: "Portugal",
      code: "PT",
    },
    city: "",
  },
  keywords: [keywords.GRAPHQL, keywords.REACT],
  type: [enums.SPEAKER, enums.WORKSHOP],
};
