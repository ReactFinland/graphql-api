const enums = require("../../../src/enums");
const keywords = require("../../keywords");

module.exports = {
  name: "Eemeli Aro",
  about:
    "Eemeli has been falling down the rabbit hole of JavaScript localization for about six years now, and keeps wondering at what the next level might be. For work he makes complicated systems seem simple, for fun he writes open-source libraries, and in his spare time he organises science fiction conventions.",
  image: "speakers/eemeli.jpg",
  social: {
    homepage: "",
    twitter: "eemeli_aro",
    github: "eemeli",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [keywords.TOOLING, keywords.REACT],
  type: [enums.SPEAKER],
};
