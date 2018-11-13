const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Manuel Matuzović",
  about:
    "I'm a frontend developer from Vienna. I'm specialized in HTML, CSS, accessibility, and performance.",
  image: "people/manuel.jpg",
  social: {
    homepage: "https://www.matuzo.at/",
    twitter: "mmatuzo",
    github: "matuzo",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  keywords: [keywords.REACT],
  type: [enums.SPEAKER],
};
