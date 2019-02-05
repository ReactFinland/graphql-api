import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/artem-sapegin";
import Keyword from "../../../server/schema/keywords";

const talk: Session = {
  people: [speaker],
  title: "Custom CSS is the path to inconsistent UI",
  description: `Custom CSS is the simplest way to make the UI inconsistent, especially if we’re talking about spacing between UI elements, font sizes or colors. When developers have too much freedom in defining the UI, they will do things differently. The issue could be solved by avoiding any custom CSS on the app level and having a set of primitive components that allow developers to glue UI together in a consistent way.`,
  type: SessionType.TALK,
  keywords: [Keyword.REACT, Keyword.STYLING],
};

export default talk;
