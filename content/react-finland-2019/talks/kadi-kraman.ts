import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/kadi-kraman";

const talk: Session = {
  people: [speaker],
  title: "",
  description: ``,
  type: SessionType.LIGHTNING_TALK,
  keywords: [],
};

export default talk;
