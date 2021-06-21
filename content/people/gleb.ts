import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Gleb Bahmutov",
  about:
    "JavaScript ninja, image processing expert, software quality fanatic. Sr Director of Engineering at Mercari US. MS MVP for OSS work.",
  image: {
    url: "people/gleb.jpg",
  },
  social: {
    homepage: "",
    twitter: "bahmutov",
    github: "bahmutov",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Boston",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
