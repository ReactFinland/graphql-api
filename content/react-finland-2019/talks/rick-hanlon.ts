import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import speaker from "../../people/rick-hanlon";

export default {
  speakers: [speaker],
  title: "Mysterious keynote",
  description: ``,
  type: SessionType.KEYNOTE,
  keywords: [],
} as Talk;
