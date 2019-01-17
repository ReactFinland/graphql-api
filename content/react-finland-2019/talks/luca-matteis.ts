import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/luca-matteis";

const talk: Session = {
  people: [speaker],
  title: "Append-only development with React",
  description: `Behavioral Programming is a new paradigm that changes how we think about developing software. Programs are constructed in an incremental-fashion where newly added code can change how old code is executed. In this talk I will explain this paradigm in the context of developing a React app. Furthermore I will show how changes can be made to the app without having to understand how old code was written; hence I describe this method as "append-only development". `,
  type: SessionType.TALK,
  keywords: ["Behavioral Programming", "React", "generators", "events"], // FIXME
};

export default talk;
