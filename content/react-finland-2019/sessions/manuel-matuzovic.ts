import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import speaker from "../../people/manuel-matuzovic";

export default {
  speakers: [speaker],
  title: "Mysterious accessibility talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
} as Talk;
