const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Tanmai Gopal",
  about:
    "Tanmai is the co-founder of hasura.io. He is a StackOverflow powered fullstack, polyglot developer whose areas of interest and work span react, GraphQL, nodejs, python, haskell, docker, postgres, kubernetes. He is passionate about making it easy to build things and is the instructor of India's largest MOOC imad.tech with over 250,000 students.",
  aboutShort:
    "Tanmai is the co-founder of hasura.io. He is passionate about making it easy to build things and is the instructor of India's largest MOOC imad.tech with over 250,000 students.",
  image: "graphql-finland-2018/speakers/tanmai.jpg",
  social: {
    twitter: "tanmaigo",
    github: "coco98",
  },
  location: {
    country: {
      name: "India",
      code: "IN",
    },
    city: "Bangalore",
  },
  keywords: [keywords.GRAPHQL],
  type: [enums.SPEAKER, enums.LIGHTNING_TALK],
};
