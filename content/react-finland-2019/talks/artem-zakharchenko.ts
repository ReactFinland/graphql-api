import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/artem-zakharchenko";

const talk: Session = {
  people: [speaker],
  title: "Mysterious styling talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
};

export default talk;
