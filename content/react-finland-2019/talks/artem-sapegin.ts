import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/artem-sapegin";

const talk: Session = {
  people: [speaker],
  title: "Mysterious components talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
};

export default talk;
