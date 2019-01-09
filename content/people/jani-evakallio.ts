const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Jani Eväkallio",
  about: "Jani is a small-town Finnish boy far from home. Today he leads a team building cross-stack React mobile and web apps at Formidable London and, in his spare time, performs improvised comedy and speaks at conferences advocating for the React ecosystem, particularly React Native and GraphQL.",
  image: "people/jani.jpg",
  social: {
    homepage: "",
    twitter: "jevakallio",
    github: "jevakallio",
    linkedin: "jevakallio",
  },
  location: {
    country: {
      name: "United Kingdom",
      code: "GB",
    },
    city: "London",
  },
  keywords: [keywords.REACT],
  type: [enums.SPEAKER],
};
