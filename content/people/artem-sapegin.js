const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Artem Sapegin",
  about:
    "Artem is a frontend developer living in Berlin, passionate photographer and owner of crazy dogs. Creator of React Styleguidist.",
  image: "people/artem.jpg",
  social: {
    homepage: "http://sapegin.me/",
    twitter: "iamsapegin",
    github: "sapegin",
    linkedin: "artemsapegin",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [
    keywords.REACT,
    keywords.STYLING,
    keywords.STYLEGUIDIST,
    keywords.STYLE_GUIDES,
    keywords.TOOLING,
  ],
  type: [enums.SPEAKER],
};
