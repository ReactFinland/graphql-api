import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/rick-hanlon";

const talk: Session = {
  people: [speaker],
  title: "Mysterious keynote",
  description: ``,
  type: SessionType.KEYNOTE,
  keywords: [],
};

export default talk;
