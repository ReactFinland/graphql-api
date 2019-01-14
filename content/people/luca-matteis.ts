import { ContactType } from "../../server/schema";
import keywords from "../keywords";

export default {
  name: "Luca Matteis",
  about: "Event Sourcing, Statecharts, Behavioral Programming.",
  image: "people/luca.jpg",
  social: {
    medium: "@lmatteis",
    twitter: "lmatteis",
    github: "lmatteis",
  },
  location: {
    country: {
      name: "Italy",
      code: "IT",
    },
    city: "Rome",
  },
  keywords: [keywords.REACT],
  type: [ContactType.SPEAKER],
};
