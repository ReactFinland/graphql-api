import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/christoffer-niska";

const talk: Session = {
  people: [speaker],
  title: "Releasing a library written in TypeScript on NPM",
  description: "", // Session description goes here. ES6 template and markdown work
  type: SessionType.TALK, // SessionType.LIGHTNING_TALK, SessionType.KEYNOTE, SessionType.WORKSHOP are possible too
  keywords: [Keyword.NPM, Keyword.TYPESCRIPT],
};

export default talk;
