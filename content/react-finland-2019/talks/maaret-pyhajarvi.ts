import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/maaret-pyhajarvi";

const talk: Session = {
  people: [speaker],
  title: "Mysterious testing talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
};

export default talk;
