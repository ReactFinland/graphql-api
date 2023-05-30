import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Jani Eväkallio",
  about: `A web engineer with a passion for building rich, collaborative, real-time web applications. Open Source author, comedian, improviser and once an aspiring novelist, these days Jani is building AI-enhanced text editing tools to help others, and himself, write better.`,
  image: {
    url: "people/jani.jpg",
  },
  social: {
    homepage: "",
    twitter: "jevakallio",
    github: "jevakallio",
    linkedin: "jevakallio",
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
