const enums = require("../../../src/enums");
const speaker = require("../people/kasia-jastrzebska");

module.exports = {
  speakers: [speaker],
  title: "Styled Components, SSR, and Theming",
  description:
    "All you need to know to become hero of CSS-in-JS with `styled-components`. We will go through the new API, performance improvements, server side rendering with Next.js and the theming manager available with v2 of `styled-components`.",
  type: enums.TALK,
  keywords: speaker.keywords,
};
