const enums = require("../../../src/enums");
const keywords = require("../../keywords");

// TODO: Update to point to the right speaker
const speaker = require("../../people/_template");

module.exports = {
  speakers: [speaker],
  title: "", // The title of the session goes here
  description: "", // Session description goes here. ES6 template and markdown work
  type: SessionType.TALK, // SessionType.LIGHTNING_TALK, SessionType.KEYNOTE, SessionType.WORKSHOP are possible too
  keywords: speaker.keywords,
};
