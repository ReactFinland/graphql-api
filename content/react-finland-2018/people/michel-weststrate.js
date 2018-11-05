const enums = require("../../../src/enums");
const keywords = require("../../keywords");

module.exports = {
  name: "Michel Weststrate",
  about:
    "Full-stack tech lead and open source evangelist at Mendix. Author of MobX, MobX-State-Tree and Immer. On a quest to make programming as natural as possible.",
  image: "speakers/michel.jpg",
  social: {
    homepage: "",
    twitter: "mweststrate",
    github: "mweststrate",
    linkedin: "michel-weststrate-3558463",
  },
  location: {
    country: {
      name: "Netherlands",
      code: "NL",
    },
    city: "Amsterdam",
  },
  keywords: [
    keywords.IMMER,
    keywords.MOBX,
    keywords.MOBX_STATE_TREE,
    keywords.REACT,
    keywords.STATE_MANAGEMENT,
  ],
  type: [enums.SPEAKER],
};
