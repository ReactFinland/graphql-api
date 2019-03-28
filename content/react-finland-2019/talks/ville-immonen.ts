import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/ville-immonen";

const talk: Session = {
  people: [speaker],
  title: "Toolchain for building modular React Native plugins",
  description: ``,
  type: SessionType.TALK,
  keywords: [Keyword.REACT_NATIVE, Keyword.UNIVERSAL_REACT],
};

export default talk;
