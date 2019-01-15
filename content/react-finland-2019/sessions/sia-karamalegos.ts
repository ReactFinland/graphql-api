import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import speaker from "../../people/sia-karamalegos";

export default {
  speakers: [speaker],
  title: "Mysterious talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
} as Talk;
