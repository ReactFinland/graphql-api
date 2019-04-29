import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/rick-hanlon";

const talk: Session = {
  people: [speaker],
  title: "The Untouchable Web",
  description: `The majority of users are now browsing websites primarily using touch devices. In this talk, Rick Hanlon from the React Native team at Facebook shares what React Native has learned about touch devices with web developers, including how to provide a rich user experiance today, and where this space is going.`,
  type: SessionType.KEYNOTE,
  keywords: [Keyword.REACT_NATIVE, Keyword.REACT],
};

export default talk;
