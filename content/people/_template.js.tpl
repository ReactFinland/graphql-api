const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "",
  about: "",
  image: "speakers/TODO.jpg", // TODO: Place image at root images/ and update name
  social: {
    homepage: "",
    twitter: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  location: {
    country: {
      name: "", // TODO: Country name
      code: "", // TODO: Two-letter country code
    },
    city: "", // TODO: City name
  },
  keywords: [keywords.REACT], // TODO: check keywords for more
  type: [enums.SPEAKER],
};
