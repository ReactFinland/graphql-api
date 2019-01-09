const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Ville Immonen",
  about: "Software developer who works on developer tools at Expo. Formerly co-founded Reindex, a hosted GraphQL service. Likes good coffee, snowboarding and surfing. Lives in Finland with his family.",
  image: "people/ville.jpg",
  social: {
    twitter: "VilleImmonen",
    github: "fson",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Espoo",
  },
  keywords: [
    keywords.REACT,
    keywords.REACT_NATIVE,
    keywords.TOOLING,
    keywords.UNIVERSAL_REACT,
  ],
  type: [enums.SPEAKER],
};
