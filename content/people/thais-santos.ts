import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Thais Santos",
  about: `Design Systems crusader 🧭 Currently lead design at [‹div›RIOTS](https://divriots.com/) - makers of [Backlight](https://backlight.dev/): a unique, all-in-one design system solution.`,
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
    linkedin: "https://www.linkedin.com/in/thaissantosdesigner/",
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
    Keyword.DESIGN_SYSTEMS,
    Keyword.STYLING,
    Keyword.TOOLING,
  ], // TODO: check keywords for more
  type: [ContactType.SPEAKER],
};

export default person;
