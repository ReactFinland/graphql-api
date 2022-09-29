import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Nicola Corti",
  about:
    "Nicola Corti is a Google Developer Expert for Kotlin. He has been working with the language since before version 1.0, and he is the maintainer of several open-source libraries and tools for mobile developers. He's currently working in the React Native Core team at Meta, building one of the most popular cross-platform mobile framework. Furthermore, he is an active member of the developer community. His involvement goes from speaking at international conferences to being a member of CFP committees and supporting developer communities across Europe. In his free time, he also loves baking, podcasting, and running.",
  aboutShort: "React Native Core @ Meta",
  image: {
    url: "people/nicola.jpg",
  },
  social: {
    homepage: "https://ncorti.com/",
    twitter: "cortinico",
    github: "cortinico",
    facebook: "",
    medium: "",
    instagram: "cortinico",
    linkedin: "cortinico",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Great Britain",
      code: "GB",
    },
    city: "London",
  },
  keywords: [Keyword.REACT_NATIVE, Keyword.ANDROID, Keyword.KOTLIN],
  type: [ContactType.SPEAKER],
};

export default person;
