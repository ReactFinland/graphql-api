import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/vivek-nayyar";

const talk: Session = {
  people: [speaker],
  title: "",
  description: "",
  type: SessionType.TALK, // SessionType.LIGHTNING_TALK, SessionType.KEYNOTE, SessionType.WORKSHOP are possible too
  keywords: [],
};

export default talk;
