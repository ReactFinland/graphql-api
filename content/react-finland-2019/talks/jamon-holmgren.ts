import { Session, SessionType } from "../../../server/schema/Session";
import Keyword from "../../../server/schema/keywords";
import speaker from "../../people/jamon-holmgren";

const talk: Session = {
  people: [speaker],
  title: "Mysterious Ignite talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [Keyword.REACT_NATIVE],
};

export default talk;
