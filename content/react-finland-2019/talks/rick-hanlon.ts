import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/rick-hanlon";

const talk: Session = {
  people: [speaker],
  title: "The Untouchable Web",
  description: ``,
  type: SessionType.KEYNOTE,
  keywords: [Keyword.REACT_NATIVE, Keyword.REACT],
};

export default talk;
