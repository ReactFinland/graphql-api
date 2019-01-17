import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Manuel Matuzović",
  about:
    "I'm a frontend developer from Vienna. I'm specialized in HTML, CSS, accessibility, and performance.",
  image: {
    url: "people/manuel.jpg",
  },
  social: {
    homepage: "https://www.matuzo.at/",
    twitter: "mmatuzo",
    github: "matuzo",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  keywords: [keywords.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
