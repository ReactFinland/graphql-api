const enums = require("../../../src/enums");
const speaker = require("../people/ken-wheeler");

module.exports = {
  speakers: [speaker],
  title: "How React changed everything",
  description: `
This talk will examine how React changed the front end landscape as we know it. We'll start by recounting the pre-React landscape, including prior art. Next, we'll venture into the introduction of React, and its reception and growth.

But most importantly, we will take a look at the core idea of React, and why it transcends language or rendering target and posit on what that means going forward, including what React might look like years from now.
  `,
  type: enums.KEYNOTE,
  keywords: speaker.keywords,
  urls: {
    web: "https://reactfinland.surge.sh/",
  },
};
