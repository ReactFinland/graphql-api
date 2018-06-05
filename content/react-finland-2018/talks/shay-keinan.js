const enums = require("../enums");
const keywords = require("../keywords");
const speaker = require("../people/shay-keinan");

module.exports = {
  speakers: [speaker],
  title: "ReactVR",
  description:
    "WebVR enables web developers to create frictionless, immersive experiences. We’ll explore the core concepts behind VR, see different demonstrations, learn how to get started with React VR and how to add new features from the Three.js library.",
  type: enums.PRESENTATION,
  keywords: speaker.keywords,
};
