import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Eeva-Jonna Panula",
  about: "Changing the world one div at the time.",
  image: {
    url: "people/eevis.png",
  },
  social: {
    homepage: "",
    twitter: "EevisPanula",
    github: "eevajonnapanula",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
