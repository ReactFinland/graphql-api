import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Sven Sauleau",
  about:
    "Sven is french software engineer, fascinated by JavaScript engines and apparently trains. OSS enthusiast; working on JavaScript, Babel, Webpack, WebAssembly and some bits of Rust.",
  image: {
    url: "people/sven.jpg",
  },
  social: {
    homepage: "https://sauleau.com",
    twitter: "svensauleau",
    github: "xtuc",
  },
  location: {
    country: {
      name: "United Kingdom",
      code: "UK",
    },
    city: "London",
  },
  keywords: [Keyword.BABEL, Keyword.TOOLING],
  type: [ContactType.SPEAKER],
};

export default person;
