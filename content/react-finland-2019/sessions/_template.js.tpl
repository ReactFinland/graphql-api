import { SessionType } from "../../../server/schema";
import { Talk } from "../../../server/schema/Session";

// TODO: Update to point to the right speaker
import speaker from "../../people/<speaker>";

export default {
  speakers: [speaker],
  title: "", // The title of the session goes here
  description: "", // Session description goes here. ES6 template and markdown work
  type: SessionType.TALK, // SessionType.LIGHTNING_TALK, SessionType.KEYNOTE, SessionType.WORKSHOP are possible too
  keywords: [],
} as Talk;
