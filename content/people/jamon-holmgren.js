const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Jamon Holmgren",
  about:
    "Founder & CTO @infinitered (http://infinite.red). Software engineer (JS, React/React Native, Node, Ruby, Elixir), Lutheran, husband, dad to 4.",
  image: "people/jamon.jpg",
  social: {
    homepage: "https://jamonholmgren.com/",
    twitter: "jamonholmgren",
    github: "jamonholmgren",
    facebook: "",
    medium: "jamonholmgren",
    instagram: "",
    linkedin: "jamonholmgren",
    youtube: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Vancouver",
  },
  keywords: [keywords.REACT, keywords.REACT_NATIVE],
  type: [enums.SPEAKER],
};
