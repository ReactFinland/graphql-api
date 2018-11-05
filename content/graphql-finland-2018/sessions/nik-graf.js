const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../people/nik-graf");

module.exports = {
  speakers: [speaker],
  title: "Reason and GraphQL",
  description: `Using Reason's type inference we can create GraphQL servers with 100% type coverage. Regardless if we compile to Node.js or native binaries using Reason we can do this with ease.

Besides that Reason shines even more so on the client. Send one quick introspection request and you get full autocompletion on your schema right in the browser.`,
  type: enums.LIGHTNING_TALK,
  keywords: [keywords.GRAPHQL],
};
