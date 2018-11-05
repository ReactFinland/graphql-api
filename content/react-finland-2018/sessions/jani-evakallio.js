const enums = require("../../../src/enums");
const speaker = require("../../people/jani-evakallio");

module.exports = {
  speakers: [speaker],
  title: "The New Best Practices",
  description: `
When React was first introduced, it was ridiculed for going against established web development best practices as we knew them. Five years later, React is the gold standard for how we create user interfaces. 

Along the way, we’ve discovered a new set of tools, design patterns and programming techniques. In this talk, we’ll explore how we can apply the React philosophy to software engineering problems far beyond the React ecosystem.`,
  type: enums.KEYNOTE,
  keywords: speaker.keywords,
};
