import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "",
  about: "",
  image: {
    url: "people/juri.jpg",
  },
  social: {
    homepage: "https://juristr.com/",
    twitter: "juristr",
    github: "juristr",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Italy",
      code: "IT",
    },
    city: "",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
