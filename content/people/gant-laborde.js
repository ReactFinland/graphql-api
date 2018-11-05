const enums = require("../src/enums");
const keywords = require("../../keywords");

module.exports = {
  name: "Gant Laborde",
  about:
    "Gant is a New Orleans-based force of nature. Not satisfied to be “just” an experienced programmer in an array of disciplines, he’s also a prolific writer, an award-winning public speaker, and an adjunct professor.\n\nA self-improvement aficionado, he takes every opportunity to connect with people and share knowledge through education and outreach. In the zombie apocalypse, Gant will run our much-needed bar, offering up advice, encouragement, and libations in equal measure.",
  image: "speakers/gant.png",
  social: {
    homepage: "http://gantlaborde.com/",
    twitter: "GantLaborde",
    github: "GantMan",
    linkedin: "gant-laborde",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "New Orleans",
  },
  keywords: [keywords.REACT, keywords.REACT_NATIVE],
  type: [enums.SPEAKER],
};
