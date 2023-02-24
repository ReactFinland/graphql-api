import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Tero Parviainen",
  about: "Software developer, music hacker. One half of Counterpoint.",
  image: {
    url: "people/tero.jpg",
  },
  social: {
    homepage: "https://ctpt.co",
    twitter: "teropa",
    github: "teropa",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  tagline: "Generates music",
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
