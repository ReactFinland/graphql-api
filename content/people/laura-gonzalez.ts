import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Laura González",
  about: "",
  image: {
    url: "people/laura.jpg",
  },
  social: {
    homepage: "https://www.lauragonzalez.cc",
    twitter: "freezydorito",
    github: "walaura",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "walaura",
    youtube: "",
  },
  location: {
    country: {
      name: "United Kingdom",
      code: "UK",
    },
    city: "London",
  },
  keywords: [Keyword.REACT], // TODO: check keywords for more
  type: [ContactType.SPEAKER],
};

export default person;
