const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Artem Zakharchenko",
  about:
    "Full-stack JavaScript engineer, doctor, musician, designer. Walking the marvelous road of learning.",
  image: "people/artem-z.jpg",
  social: {
    homepage: "",
    twitter: "kettanaito",
    github: "kettanaito",
    linkedin: "artem-zakharchenko",
  },
  location: {
    country: {
      name: "Czech Republic",
      code: "CZ",
    },
    city: "Prague",
  },
  keywords: [keywords.REACT, keywords.STYLING, keywords.TOOLING],
  type: [enums.SPEAKER],
};
