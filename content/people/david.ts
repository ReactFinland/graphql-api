import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "David Leitner",
  about:
    "Enthusiastic Software Professional from Vienna. I don't sleep too much, do open source and prefer keeping my code simple and small instead of clever and edgy.",
  image: {
    url: "people/david-l.jpg",
  },
  social: {
    homepage: "",
    twitter: "duffleit",
    github: "duffleit",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "leitner-david",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
