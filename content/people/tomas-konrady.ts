import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

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
  keywords: [keywords.REACT, keywords.TOOLING],
  type: [ContactType.SPEAKER],
};

export default person;
