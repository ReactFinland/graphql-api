const enums = require("../../src/enums");
const keywords = require("../keywords");

module.exports = {
  name: "Sia Karamalegos",
  about:
    "Sia Karamalegos is a web developer, currently focused on developing web applications and improving front-end performance. She is an international conference speaker and co-organizes #FrontEndParty, gnocode, and NOLA Hack Night in the New Orleans area. Sia loves making developers' lives easier through teaching, speaking at conferences, and mentoring. She is the founder and lead developer for Clio + Calliope Web Development and was recognized in the Silicon Bayou 100, the 100 most influential and active people in tech and entrepreneurship in Louisiana. When she's not coding, speaking, or consulting, Sia likes to design crochet patterns and dabble in charcoal figure drawing. She's also an avid endurance athlete.",
  image: "people/sia.jpg",
  social: {
    homepage: "https://siakaramalegos.github.io/",
    twitter: "thegreengreek",
    github: "siakaramalegos",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "New Orleans",
  },
  keywords: [
    keywords.NEXT_JS,
    keywords.REACT,
    keywords.SSR,
    keywords.UNIVERSAL_REACT,
  ],
  type: [enums.SPEAKER],
};
