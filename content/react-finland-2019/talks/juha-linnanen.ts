import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import keywords from "../../keywords";
import speaker from "../../people/juha-linnanen";

export default {
  speakers: [speaker],
  title: "Mysterious React Native talk",
  description: ``,
  type: SessionType.LIGHTNING_TALK,
  keywords: [keywords.REACT_NATIVE],
} as Talk;
