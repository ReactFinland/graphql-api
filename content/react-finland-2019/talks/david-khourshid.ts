import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/david-khourshid";

const talk: Session = {
  people: [speaker],
  title: "Mysterious talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
};

export default talk;
