import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/mike-berman";

const talk: Session = {
  people: [speaker],
  title: "Controlling hardware with React",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
};

export default talk;
