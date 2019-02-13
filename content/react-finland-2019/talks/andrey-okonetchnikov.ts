import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/andrey-okonetchnikov";

const talk: Session = {
  people: [speaker],
  title: "A Common Design Language. Let Designers and Developers talk to each other.",
  description: `“Should designers code?” or “Should coders design?”—these two eternal questions are being asked for years with no particular answer given.

- How to let developers know what typography style or button variance they should be using on this particular screen?
- How to ensure that the whole UI is consistent?
- How to let designers know that some screen design doesn’t fit the requirements and needs to be updated?

In order to answer those questions designers and developers have to speak the same language. But what language should it be? 

UI components and pattern libraries can provide this intermediate abstraction and be a common language for both designers and developers.`,
  type: SessionType.TALK,
  keywords: ['Design Systems'],
};

export default talk;
