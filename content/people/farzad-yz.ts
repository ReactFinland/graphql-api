import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Farzad Yousefzadeh",
  about:
    "Aerospace engineer and Astrophysicist turned Software engineer. Lead engineer @Stately.ai, leading development of Stately editor, a visual editor for modeling application logic using Statecharts",
  image: {
    url: "people/farzad.jpg",
  },
  social: {
    homepage: "https://farzadyz.com/",
    twitter: "farzad_yz",
    github: "farskid",
    facebook: "",
    medium: "farzad_yz",
    instagram: "",
    linkedin: "farzad_yz",
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
    Keyword.ACTOR_MODEL,
  ],
  type: [ContactType.SPEAKER],
};

export default person;
