import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Nicola Corti",
  about: "Kotlin GDE. Maintainer of Detekt. Android @ Meta.",
  image: {
    url: "people/nicola.jpg",
  },
  social: {
    homepage: "https://ncorti.com/",
    twitter: "cortinico",
    github: "cortinico",
    facebook: "",
    medium: "",
    instagram: "cortinico",
    linkedin: "cortinico",
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
