const enums = require("../../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Helen Zhukova",
  about:
    "Helen creates user interfaces for Web and mobile mainly for live video streaming and video post-production for the movie studios. JavaScript is my first love but I am open to any technologies and skills that make my creations the best look and feel. I am a lifelong learner and I love to share my knowledge.",
  image: "graphql-finland-2018/speakers/helen.jpg",
  social: {
    twitter: "@zhukova_h",
    github: "zhukovka",
  },
  location: {
    country: {
      name: "Ukraine",
      code: "UA",
    },
    city: "Kiev",
  },
  keywords: [keywords.GRAPHQL, keywords.GRAPHQLJS],
  type: [enums.SPEAKER, enums.LIGHTNING_TALK],
};
