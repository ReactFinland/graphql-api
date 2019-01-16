import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Luca Matteis",
  about: "Event Sourcing, Statecharts, Behavioral Programming.",
  image: {
    url: "people/luca.jpg",
  },
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

export default person;
