const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Mike Berman",
  about: "Engineer @ Facebook, former organizer of Sydney Zombie Walk, & big fan of breakfast foods • 🎹 • ‍🤹 • ⛷ • 🦘🇦🇺‍",
  image: "people/mike.jpg",
  social: {
    homepage: "https://berman.xyz",
    twitter: "",
    github: "",
    linkedin: "mikeyberman",
  },
  location: {
    country: {
      name: "United Kingdom",
      code: "UK",
    },
    city: "London",
  },
  keywords: [keywords.REACT, keywords.REDUX],
  type: [enums.SPEAKER],
};
