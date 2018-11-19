const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Tomáš Konrády",
  about: "Developer... (and artist a bit)",
  image: "people/tomas.jpg",
  social: {
    twitter: "konnnyy",
    github: "tommmyy",
    linkedin: "tomaskonrady",
  },
  location: {
    country: {
      name: "Czech Republic",
      code: "CZ",
    },
    city: "Prague",
  },
  keywords: [keywords.REACT, keywords.TOOLING],
  type: [enums.SPEAKER],
};
