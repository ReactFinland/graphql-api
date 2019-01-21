import { SessionType } from "../../../server/schema";
import Keyword from "../../../server/schema/keywords";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/ville-immonen";

const talk: Session = {
  people: [speaker],
  title: "Mysterious Expo talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [Keyword.REACT_NATIVE],
};

export default talk;
