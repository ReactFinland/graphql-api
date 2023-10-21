import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Thaís Santos",
  about: `Design Systems crusader | Blockchain enthusiast | Making the IT world better one component at a time`,
  image: {
    url: "people/thais.jpg",
  },
  social: {
    homepage: "",
    twitter: "th4is_ds",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "thaissantosdesigner",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Netherlands",
      code: "NL",
    },
    city: "Amsterdam",
  },
  tagline: "Master of design systems",
  keywords: [Keyword.DESIGN_SYSTEMS, Keyword.STYLING, Keyword.TOOLING], // TODO: check keywords for more
  type: [ContactType.SPEAKER],
};

export default person;
