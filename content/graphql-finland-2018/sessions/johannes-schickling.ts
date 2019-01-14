import enums from "../../../src/enums";
import keywords from "../../keywords";
import speaker from "../../people/johannes-schickling";

export default {
  speakers: [speaker],
  title: "End-to-end type-safety with GraphQL",
  description: `GraphQL is becoming the new standard for API development and shows rapid adoption both on the client and server. This talk dives deep into one of the most powerful features of GraphQL - its type-system. See how GraphQL can be used to enable end-to-end type-safety across any language, making your application architecture more resilient and easier to evolve.`,
  type: ContactType.LIGHTNING_TALK,
  keywords: [keywords.GRAPHQL],
  urls: {
    web: "",
    slides: "http://slides.graphql-finland.fi/2018/08-johannes-schickling.pdf",
    video: "https://www.youtube.com/watch?v=5JuSXwFSJn4",
  },
};
