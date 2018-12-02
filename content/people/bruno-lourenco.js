const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Bruno Lourenço",
  about:
    "Bruno Lourenço has loved animations since Flash. He’s passionate about physics-based UI animations and believes coding them doesn’t have to be complicated - which led him to create React-Morph. He’s a Senior Frontend Developer at Ginetta, a design agency based in Switzerland.",
  image: "people/bruno.jpg",
  social: {
    homepage: "",
    twitter: "brunnolou",
    github: "brunnolou",
    linkedin: "",
  },
  location: {
    country: {
      name: "Portugal",
      code: "PT",
    },
    city: "Braga",
  },
  keywords: [keywords.ANIMATION, keywords.REACT],
  type: [enums.SPEAKER],
};
