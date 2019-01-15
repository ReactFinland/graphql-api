import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import speaker from "../../people/tomas-konrady";

export default {
  speakers: [speaker],
  title: "Mysterious CMS talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
} as Talk;
