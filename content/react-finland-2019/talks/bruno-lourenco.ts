import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import speaker from "../../people/bruno-lourenco";

export default {
  speakers: [speaker],
  title: "Mysterious animation talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
} as Talk;
