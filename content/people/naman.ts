import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Naman Goel",
  about: "",
  image: {
    url: "people/naman.jpg",
  },
  social: {
    homepage: "",
    twitter: "naman34",
    github: "nmn",
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
    city: "San Francisco",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
