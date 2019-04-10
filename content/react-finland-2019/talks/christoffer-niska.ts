import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/christoffer-niska";

const talk: Session = {
  people: [speaker],
  title: "Releasing a library written in TypeScript on NPM",
  description: `Most of us have used or at least heard about TypeScript, but how many have released a React library written in TypeScript on NPM?

In this session we will take a quick look at the tooling required and some best practices for publishing a library written in TypeScript.`,
  type: SessionType.LIGHTNING_TALK,
  keywords: [Keyword.NPM, Keyword.TYPESCRIPT],
};

export default talk;
