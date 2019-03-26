import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Farzad Yz",
  about:
    "Farzad is a Software developer focused on JavaScript and friends. He is usually fascinated by Tooling, Architecture, Automation and Software Patterns.",
  image: {
    url: "people/farzad.jpg",
  },
  social: {
    homepage: "https://farzadyz.com/",
    twitter: "farzad_yz",
    github: "farskid",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [
    Keyword.STATE_MANAGEMENT,
    Keyword.STATECHARTS,
    Keyword.HEADLESS_COMPONENTS,
  ],
  type: [ContactType.SPEAKER],
};

export default person;
