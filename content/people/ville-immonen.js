const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Ville Immonen",
  about:
    "Developer @expo • Dad • Co-founder @reindexio • React Native • GraphQL • JavaScript • Coffee",
  image: "people/ville.jpg",
  social: {
    homepage: "",
    twitter: "VilleImmonen",
    github: "fson",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  location: {
    country: {
      name: "Finland", // TODO: Country name
      code: "FI", // TODO: Two-letter country code
    },
    city: "Helsinki",
  },
  keywords: [keywords.REACT, keywords.REACT_NATIVE],
  type: [enums.SPEAKER],
};
