const enums = require("../enums");
const keywords = require("../keywords");

module.exports = {
  name: "Juho Vepsäläinen",
  about:
    "Juho Vepsäläinen is behind the SurviveJS effort. In addition to being a core developer of Webpack, he has been active in the open source scene since the early 2000s. Blue Arrow Awards winner.",
  image: "speakers/juho.jpg",
  social: {
    homepage: "https://survivejs.com/",
    twitter: "bebraw",
    medium: "@bebraw",
    github: "bebraw",
    linkedin: "juhovepsalainen",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  keywords: [keywords.TOOLING, keywords.WEBPACK],
  type: [enums.ORGANIZER, enums.SPEAKER],
};
