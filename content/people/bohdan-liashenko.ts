import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Bohdan Liashenko",
  about: "",
  image: {
    url: "people/bohdan.jpg",
  },
  social: {
    homepage: "",
    twitter: "bliashenko",
    github: "",
    facebook: "",
    medium: "@bohdanliashenko",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  location: {
    country: {
      name: "Sweden",
      code: "SE",
    },
    city: "Stockholm",
  },
  keywords: [Keyword.REACT], // TODO: check keywords for more
  type: [ContactType.SPEAKER],
};

export default person;
