import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/monica-lent";

const talk: Session = {
  people: [speaker],
  title: "Mysterious design talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
};

export default talk;
