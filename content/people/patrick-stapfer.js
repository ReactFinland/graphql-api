const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Patrick Stapfer",
  about:
    "Patrick Stapfer is a JavaScript Software Engineer and freelancer, mostly known for his contributions to the Flow type checker ecosystem and his recent work at Runtastic, where he spent most of his time working on the Mobile News Feed feature (built in React Native). Most of his Open Source time is dedicated to the ReasonML and OCaml platform to build robust, type-safe JS applications.",
  image: "people/patrick.jpg",
  social: {
    homepage: "",
    twitter: "ryyppy",
    github: "ryyppy",
    linkedin: "patrick-stapfer-5ba205a4",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  keywords: [keywords.REACT, keywords.REASON],
  type: [enums.SPEAKER],
};
