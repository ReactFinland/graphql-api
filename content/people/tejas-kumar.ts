import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Tejas Kumar",
  about: "I write code and love life.",
  image: {
    url: "people/tejas.jpg",
  },
  social: {
    homepage: "",
    twitter: "TejasKumar_",
    github: "tejasq",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [keywords.REACT, keywords.TOOLING],
  type: [ContactType.SPEAKER],
};

export default person;
