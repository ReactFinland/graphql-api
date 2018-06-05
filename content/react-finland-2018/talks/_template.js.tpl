const enums = require("../enums");
const keywords = require("../keywords");

// TODO: Update to point to the right speaker
const speaker = require("../people/_template");

module.exports = {
  speakers: [speaker],
  title: "", // TODO: Talk title goes here
  description: "", // TODO: Talk description goes here. ES6 template and markdown work
  type: enums.PRESENTATION, // TODO: change to enums.LIGHTNING_TALK for a short one
  keywords: speaker.keywords,
};
