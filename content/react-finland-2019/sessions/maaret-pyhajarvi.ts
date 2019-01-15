import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";
import speaker from "../../people/maaret-pyhajarvi";

export default {
  speakers: [speaker],
  title: "Mysterious testing talk",
  description: ``,
  type: SessionType.TALK,
  keywords: [],
} as Talk;
