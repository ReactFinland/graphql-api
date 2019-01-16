import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Rick Hanlon",
  about:
    "Engineer @Facebook · Core @fbjest 🃏 · http://my.pronoun.is/he  · fly and fresh · EST. AKRON",
  image: {
    url: "people/rick.jpg",
  },
  social: {
    homepage: "https://rickhanlon.codes/",
    twitter: "rickhanlonii",
    github: "rickhanlonii",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Manhattan, New York",
  },
  keywords: [keywords.REACT, keywords.TESTING, keywords.TOOLING],
  type: [ContactType.SPEAKER],
};

export default person;
