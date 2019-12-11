import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Eli Schutze",
  about: "London based software developer and tech community enthusiast.",
  image: {
    url: "people/eli.jpg",
  },
  social: {
    homepage: "",
    twitter: "elibelly",
    github: "elischutze",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Great Britain",
      code: "GB",
    },
    city: "London",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
