import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import speaker from "../../people/tejas-kumar";

export default {
  speakers: [speaker],
  title: "Mysterious case study",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
} as Talk;
