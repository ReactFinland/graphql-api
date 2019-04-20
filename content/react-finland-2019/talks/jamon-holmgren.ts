import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/jamon-holmgren";

const talk: Session = {
  people: [speaker],
  title: "Building a Community Around Ignite",
  description: `In this talk, Jamon will go into what it took to build a thriving developer community around the popular React Native CLI and boilerplate, Ignite.`,
  type: SessionType.TALK,
  keywords: [Keyword.REACT_NATIVE],
};

export default talk;
