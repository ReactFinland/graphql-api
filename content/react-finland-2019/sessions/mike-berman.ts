import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import speaker from "../../people/mike-berman";

export default {
  speakers: [speaker],
  title: "Controlling hardware with React",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
} as Talk;
