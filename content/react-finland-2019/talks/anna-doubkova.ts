import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/anna-doubkova";

const talk: Session = {
  people: [speaker],
  title: "Mysterious case study",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
};

export default talk;
