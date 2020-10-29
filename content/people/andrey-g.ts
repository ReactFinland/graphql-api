import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Andrey Goncharov",
  about: "",
  image: {
    url: "people/andrey-g.jpg",
  },
  social: {
    homepage: "",
    twitter: "ai_goncharov",
    github: "aigoncharov",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Russia",
      code: "RU",
    },
    city: "Voronezh",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
