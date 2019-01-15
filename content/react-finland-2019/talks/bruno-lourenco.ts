import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/bruno-lourenco";

const talk: Session = {
  people: [speaker],
  title: "Mysterious animation talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
};

export default talk;
