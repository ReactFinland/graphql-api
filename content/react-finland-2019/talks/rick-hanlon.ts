import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/rick-hanlon";

const talk: Session = {
  people: [speaker],
  title: "React Everywhere",
  description: `From web, to iOS, Android, and VR: React is everywhere. In this talk, Rick Hanlon from the React Native Core team reviews all of the platforms using React to build apps with React Native, and previews the latest platform to join the React Native family: Web.`,
  type: SessionType.KEYNOTE,
  keywords: [Keyword.REACT_NATIVE, Keyword.REACT, Keyword.REACT_VR],
};

export default talk;
