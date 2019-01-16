import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import keywords from "../../keywords";
import speaker from "../../people/eloy-duran";

const talk: Session = {
  people: [speaker],
  title: "Where art thou, my error?",
  description: "",
  type: SessionType.TALK,
  keywords: [keywords.GRAPHQL],
  urls: {
    web: "",
    slides: "http://slides.graphql-finland.fi/2018/14-eloy-duran.pdf",
    video: "https://www.youtube.com/watch?v=qKA-n8p-sNc",
  },
};

export default talk;
