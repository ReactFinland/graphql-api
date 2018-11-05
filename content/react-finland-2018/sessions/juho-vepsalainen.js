const enums = require("../../../src/enums");
const keywords = require("../keywords");
const speaker = require("../people/juho-vepsalainen");

module.exports = {
  speakers: [speaker],
  title: "Static Websites - The Final Frontier",
  description:
    "What was it like to build sites in the 90s? What did we learn? And how to do it now?",
  type: enums.LIGHTNING_TALK,
  keywords: [
    keywords.REACT,
    keywords.STATIC_SITE_GENERATATION,
    keywords.WEBPACK,
  ],
  urls: {
    web:
      "https://docs.google.com/presentation/d/1dYwzzByKugHIrfA48cdhV0N-b2S2Ms_Ojd8I4ux_QRg/edit?usp=sharing",
  },
};
