import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import keywords from "../../keywords";
import speaker from "../../people/ville-immonen";

const talk: Session = {
  people: [speaker],
  title: "Mysterious Expo talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [keywords.REACT_NATIVE],
};

export default talk;
