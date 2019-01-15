import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import keywords from "../../keywords";
import speaker from "../../people/jamon-holmgren";

export default {
  speakers: [speaker],
  title: "Mysterious Ignite talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [keywords.REACT_NATIVE],
} as Talk;
