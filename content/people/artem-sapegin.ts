import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Artem Sapegin",
  about:
    "Artem is a frontend developer living in Berlin, passionate photographer and owner of crazy dogs. Creator of React Styleguidist.",
  image: {
    url: "people/artem.jpg",
  },
  social: {
    homepage: "http://sapegin.me/",
    twitter: "iamsapegin",
    github: "sapegin",
    linkedin: "artemsapegin",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [
    keywords.REACT,
    keywords.STYLING,
    keywords.STYLEGUIDIST,
    keywords.STYLE_GUIDES,
    keywords.TOOLING,
  ],
  type: [ContactType.SPEAKER],
};

export default person;
