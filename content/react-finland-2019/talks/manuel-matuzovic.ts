import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/manuel-matuzovic";

const talk: Session = {
  people: [speaker],
  title: "Mysterious accessibility talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
};

export default talk;
