import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import speaker from "../../people/artem-zakharchenko";

export default {
  speakers: [speaker],
  title: "Mysterious styling talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
} as Talk;
