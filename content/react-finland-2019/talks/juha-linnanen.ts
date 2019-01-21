import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import Keyword from "../../../server/schema/keywords";
import speaker from "../../people/juha-linnanen";

const talk: Session = {
  people: [speaker],
  title: "Mysterious React Native talk",
  description: ``,
  type: SessionType.LIGHTNING_TALK,
  keywords: [Keyword.REACT_NATIVE],
};

export default talk;
