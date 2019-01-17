import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import keywords from "../../keywords";
import speaker from "../../people/dan-schafer";

const talk: Session = {
  people: [speaker],
  title: "The Prehistory of GraphQL",
  description: "",
  type: SessionType.KEYNOTE,
  keywords: [keywords.GRAPHQL],
  urls: {
    web: "",
    slides: "http://slides.graphql-finland.fi/2018/16-dan-schafer.pdf",
    video: "https://www.youtube.com/watch?v=6NYC-k2Abow",
  },
};

export default talk;
