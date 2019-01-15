import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import keywords from "../../keywords";
import speaker from "../../people/juha-linnanen";

const talk: Session = {
  people: [speaker],
  title: "Mysterious React Native talk",
  description: ``,
  type: SessionType.LIGHTNING_TALK,
  keywords: [keywords.REACT_NATIVE],
};

export default talk;
