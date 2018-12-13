const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [require("../../people/michel-weststrate")],
  title: "TODO",
  description: `TODO`,
  /*tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/gjzhvxpdmuu",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/ype-9yteewo",
    },
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/zcsd4ygn7jo",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/766bgaavf-q",
    },
  ],*/
  keywords: require("../../people/michel-weststrate").keywords,
  location: require("../../locations")["paasitorni"],
};
