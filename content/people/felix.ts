import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Felix Gnass",
  about:
    "Author of Capri, node-dev, oazapfts, typed-rpc, react-api-query, classname-variants and lots of other small modules.",
  image: {
    url: "people/felix.jpeg",
  },
  social: {
    homepage: "",
    twitter: "fgnass",
    github: "fgnass",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Hamburg",
  },
  tagline: "Creator of Capri",
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
