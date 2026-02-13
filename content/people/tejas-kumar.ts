import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Tejas Kumar",
  about:
    "Host, ConTejas Code Podcast. Best Selling Author, Fluent React. Investor. Advisor. Formerly at ▲ Vercel, Spotify, Xata, and more. Working on AI at IBM.",
  image: {
    url: "people/tejas.jpeg",
  },
  social: {
    homepage: "",
    twitter: "tejask",
    github: "tejasq",
    linkedin: "tejasq",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [Keyword.REACT, Keyword.TOOLING],
  type: [ContactType.SPEAKER],
};

export default person;
