const enums = require("../src/enums");
const keywords = require("../../keywords");

module.exports = {
  name: "Helen Zhukova",
  about:
    "Helen creates user interfaces for Web and mobile mainly for live video streaming and video post-production for the movie studios. JavaScript is her first love but she is open to any technologies and skills that give her creations the best look and feel. She is a lifelong learner and loves to share her knowledge.",
  image: "graphql-finland-2018/speakers/helen.jpg",
  social: {
    twitter: "zhukova_h",
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
