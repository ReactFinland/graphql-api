import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Juan Picado",
  about: "Lead maintainer @verdaccio and Node.js learner",
  image: {
    url: "people/juan.jpg",
  },
  social: {
    homepage: "",
    twitter: "jotadeveloper",
    github: "juanpicado",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "jotadeveloper",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
