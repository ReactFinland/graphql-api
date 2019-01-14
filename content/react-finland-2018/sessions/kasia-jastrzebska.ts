import { SessionType } from "../../../server/schema";
import speaker from "../../people/kasia-jastrzebska";

export default {
  speakers: [speaker],
  title: "Styled Components, SSR, and Theming",
  description:
    "All you need to know to become hero of CSS-in-JS with `styled-components`. We will go through the new API, performance improvements, server side rendering with Next.js and the theming manager available with v2 of `styled-components`.",
  type: SessionType.TALK,
  keywords: speaker.keywords,
};
