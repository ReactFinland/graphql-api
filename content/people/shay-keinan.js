const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Shay Keinan",
  about:
    "Shay is an experienced developer with a rich background in developing complex user interfaces, both for 2D and 3D. Currently Shay works at 500Tech on various projects, trains and consults companies and organizes the ReactJS meetup community.",
  image: "speakers/shay.jpg",
  social: {
    homepage: "",
    twitter: "Shay_Keinan",
    github: "crazypixel",
    linkedin: "shay-keinan",
  },
  location: {
    country: {
      name: "Israel",
      code: "IL",
    },
    city: "Tel Aviv",
  },
  keywords: [keywords.REACT, keywords.REACT_VR],
  type: [enums.SPEAKER],
};
