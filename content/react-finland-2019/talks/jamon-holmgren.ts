import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/jamon-holmgren";

const talk: Session = {
  people: [speaker],
  title: "Building a Community Around Ignite",
  description: ``,
  type: SessionType.TALK,
  keywords: [Keyword.REACT_NATIVE],
};

export default talk;
