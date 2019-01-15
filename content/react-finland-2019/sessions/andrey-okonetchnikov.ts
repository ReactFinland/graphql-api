import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import speaker from "../../people/andrey-okonetchnikov";

export default {
  speakers: [speaker],
  title: "Mysterious design talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
} as Talk;
