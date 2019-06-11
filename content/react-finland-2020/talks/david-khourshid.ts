import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/david-khourshid";

const talk: Session = {
  people: [speaker],
  title: "Secret talk",
  description: "",
  type: SessionType.KEYNOTE,
  keywords: [],
};

export default talk;
