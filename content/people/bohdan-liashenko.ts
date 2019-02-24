import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Bohdan Liashenko",
  about: "Bohdan is a frontend developer living in Stockholm. Creator of codecrumbs, js2flowchart, Under the hood ReactJS.",
  image: {
    url: "people/bohdan.jpg",
  },
  social: {
    homepage: "",
    twitter: "bliashenko",
    github: "Bogdan-Lyashenko",
    facebook: "bliashenko",
    medium: "@bohdanliashenko",
    instagram: "",
    linkedin: "bohdan-liashenko-bb365854",
    youtube: "",
  },
  location: {
    country: {
      name: "Sweden",
      code: "SE",
    },
    city: "Stockholm",
  },
  keywords: [
    Keyword.REACT,
    Keyword.TOOLING
  ],
  type: [ContactType.SPEAKER],
};

export default person;
