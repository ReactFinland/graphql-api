import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import keywords from "../../keywords";
import speaker from "../../people/jamon-holmgren";

const talk: Session = {
  people: [speaker],
  title: "Mysterious Ignite talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [keywords.REACT_NATIVE],
};

export default talk;
