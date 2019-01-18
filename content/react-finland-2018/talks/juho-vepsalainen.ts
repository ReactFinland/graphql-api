import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import keywords from "../../keywords";
import speaker from "../../people/juho-vepsalainen";

const talk: Session = {
  people: [speaker],
  title: "Static Websites - The Final Frontier",
  description:
    "What was it like to build sites in the 90s? What did we learn? And how to do it now?",
  type: SessionType.LIGHTNING_TALK,
  keywords: [
    keywords.REACT,
    keywords.STATIC_SITE_GENERATATION,
    keywords.WEBPACK,
  ],
  urls: {
    web:
      "https://docs.google.com/presentation/d/1dYwzzByKugHIrfA48cdhV0N-b2S2Ms_Ojd8I4ux_QRg/edit?usp=sharing",
  },
};

export default talk;
