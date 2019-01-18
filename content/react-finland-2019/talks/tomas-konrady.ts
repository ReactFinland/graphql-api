import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/tomas-konrady";

const talk: Session = {
  people: [speaker],
  title: "Mysterious CMS talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
};

export default talk;
