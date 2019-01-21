import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Tomáš Konrády",
  about: "Developer... (and artist a bit)",
  image: {
    url: "people/tomas.jpg",
  },
  social: {
    twitter: "konnnyy",
    github: "tommmyy",
    linkedin: "tomaskonrady",
  },
  location: {
    country: {
      name: "Czech Republic",
      code: "CZ",
    },
    city: "Hradec Kralove",
  },
  keywords: [Keyword.REACT, Keyword.TOOLING],
  type: [ContactType.SPEAKER],
};

export default person;
