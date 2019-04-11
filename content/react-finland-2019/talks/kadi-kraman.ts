import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/kadi-kraman";
import Keyword from "../../../server/schema/keywords";

const talk: Session = {
  people: [speaker],
  title: "All aboard the type train",
  description: `JavaScript is a language of add-ons, and one of its more recent trends is typing. There are obvious benefits to typing, but what are the drawbacks? Should you choose Flow or TypeScript? Why use types at all? And why not just go straight to Reason? This session will provide some insight into these questions, peppered with examples from the real world.`,
  type: SessionType.LIGHTNING_TALK,
  keywords: [Keyword.TYPESCRIPT],
};

export default talk;
