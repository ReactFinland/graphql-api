const keywords = require("../keywords");

module.exports = {
  speakers: [require("../people/juho-vepsalainen")],
  title: "Webpack - The Good Parts",
  description: `In this high-level overview you'll learn how to configure Webpack. Even if you know it already, there might be some surprises in store as you gain insight to the tool you otherwise might miss.

The topics covered include:

* Fundamental ideas of webpack
* Development techniques
* Build techniques
* Asset management
* Bundle/code splitting
* Build analysis
* Optimizing the build`,
  tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/ed-qbtu5iyy",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/vwtcvheo28e",
    },
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/hfbos2nheb0",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/xaizfkm1nbe",
    },
  ],
  keywords: require("../people/juho-vepsalainen").keywords,
  location: require("../locations/elisa-appelsiini"),
};
