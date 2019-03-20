import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/tejas-kumar";

const talk: Session = {
  people: [speaker],
  title: "Scalable (Design) Systems with TypeScript",
  description: `This session explores creating living documentation for design systems, ensuring consistent documentation at all times using TypeScript.
We will read Markdown files, renders components described in them, and expose live type-safe code playgrounds powered by the Monaco Editor. We will, together, explore:

- Static Type Analysis and its value
- The Monaco text editor that powers VS Code
- Connecting it all together with React
`,
  type: SessionType.TALK,
  keywords: ["react", "design system", "monaco editor", "vs code"],
};

export default talk;
