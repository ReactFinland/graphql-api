import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Thais Santos",
  about: `Principal Developer Advocate at ‹div›RIOTS - makers of Backlight, a Design SDesign Systems crusader | Blockchain enthusiast | Design Lead @divriots | Making the IT world better one component at a time`,
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
    linkedin: "",
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
  keywords: [
    Keyword.REACT,
    Keyword.DESIGN_SYSTEMS,
    Keyword.STYLING,
    Keyword.TOOLING,
  ], // TODO: check keywords for more
  type: [ContactType.SPEAKER],
};

export default person;
