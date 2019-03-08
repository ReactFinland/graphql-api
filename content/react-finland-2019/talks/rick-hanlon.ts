import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/rick-hanlon";

const talk: Session = {
  people: [speaker],
  title: "",
  description: ``,
  type: SessionType.KEYNOTE,
  keywords: [],
};

export default talk;
