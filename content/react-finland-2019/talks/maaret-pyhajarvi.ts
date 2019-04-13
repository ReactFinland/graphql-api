import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/maaret-pyhajarvi";

const talk: Session = {
  people: [speaker],
  title: "Intersection of Automation and Exploratory Testing",
  description: ``,
  type: SessionType.TALK,
  keywords: [Keyword.REACT, Keyword.TESTING],
};

export default talk;
