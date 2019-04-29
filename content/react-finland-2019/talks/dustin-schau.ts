import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/dustin-schau";

const talk: Session = {
  people: [speaker],
  title: "Gatsby + Themes: The Future of Gatsby",
  description: `Themes ease learning curves and reduce the time to a deployable app. Want to get that great blog written, but don’t want to spend the time creating a bunch of components and UI details? Themes. Themes allow you to focus on what matters: delivering compelling experiences for your end users. Themes are coming very soon to Gatsby, and this talk will do a deep dive on what they are, how to use them, and the types of amazing content you can create easily with a framework that people love: Gatsby.`,
  type: SessionType.LIGHTNING_TALK,
  keywords: [Keyword.GATSBY, Keyword.STATIC_SITE_GENERATION],
  urls: {
    web: "https://trusting-euclid-602f4e.netlify.com/react-finland",
  },
};

export default talk;
