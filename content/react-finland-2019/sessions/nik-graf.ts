import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import speaker from "../../people/nik-graf";

export default {
  speakers: [speaker],
  title: "Mysterious talk",
  description: ``,
  type: SessionType.LIGHTNING_TALK,
  keywords: [],
} as Talk;
