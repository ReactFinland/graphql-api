const enums = require("../src/enums");
const keywords = require("../../keywords");

module.exports = {
  name: "Christian Alfoni",
  about:
    "Christian has been crunching JavaScript for about 8 years. In the recent years open source and writing articles has become a passion. Throwing bad and not so bad ideas out there to see what is valuable to people. Author of Cerebral, created Webpackbin and JSBlog... amongst other things.",
  image: "speakers/christian.jpg",
  social: {
    homepage: "http://www.christianalfoni.com/",
    twitter: "christianalfoni",
    github: "christianalfoni",
  },
  location: {
    country: {
      name: "Norway",
      code: "NO",
    },
    city: "Trondheim",
  },
  keywords: [keywords.CEREBRAL, keywords.REACT, keywords.STATE_MANAGEMENT],
  type: [enums.SPEAKER],
};
