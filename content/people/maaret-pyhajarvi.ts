const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Maaret Pyhäjärvi",
  about:
    "Feedback fairy with a day-job at F-Secure as Eng Manager. Tester, (Polyglot) Programmer, Speaker, Author, Conference Organizer. She/Her.",
  image: "people/maaret.jpg",
  social: {
    homepage: "http://maaretp.com/",
    twitter: "maaretp",
    github: "maaretp",
    linkedin: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [keywords.REACT, keywords.TESTING],
  type: [enums.SPEAKER],
};
