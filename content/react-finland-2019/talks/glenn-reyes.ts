import Keyword from "../../../server/schema/keywords";
import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/glenn-reyes";

const talk: Session = {
  people: [speaker],
  title: "Drawing a line between 3rd party and hand crafted components",
  description: `Often when we write new React components, we might be thinking: Come on, there must be one out there! And most times someone already faced the same problem... only that it's not quite the same. Should I use the 3rd party lib? Or go with my own? Let's find out the differences and trade offs in this session.`,
  type: SessionType.LIGHTNING_TALK,
  keywords: [Keyword.REACT, Keyword.LIBRARIES],
};

export default talk;
