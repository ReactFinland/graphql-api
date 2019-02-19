import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/bohdan-liashenko";

const talk: Session = {
  people: [speaker],
  title: "Mysterious tooling talk",
  description: ``,
  type: SessionType.LIGHTNING_TALK,
  keywords: [Keyword.TOOLING],
};

export default talk;
