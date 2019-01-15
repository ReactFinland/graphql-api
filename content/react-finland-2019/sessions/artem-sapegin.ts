import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import speaker from "../../people/artem-sapegin";

export default {
  speakers: [speaker],
  title: "Mysterious components talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
} as Talk;
