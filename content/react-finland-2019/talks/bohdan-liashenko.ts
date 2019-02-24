import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/bohdan-liashenko";

const talk: Session = {
  people: [speaker],
  title: "Codecrumbs in React",
  description: `The granular approach of designing components helps us to build reusable and encapsulated features. On another hand, it also makes a codebase much more complex by extra added abstractions and drastically increased amount of source code files. How can we navigate the maze of hundreds of React-atoms now? Join my talk to get the answer.`,
  type: SessionType.LIGHTNING_TALK,
  keywords: [Keyword.TOOLING],
};

export default talk;
