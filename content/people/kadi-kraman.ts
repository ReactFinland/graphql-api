import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Kadi Kraman",
  about:
    "Kadi is a Software Engineer at Formidable, JavaScript enthusiast, believer in open source and a huge fan of sticking JavaScript on every possible platform.",
  image: {
    url: "people/kadi.jpg",
  },
  social: {
    twitter: "kadikraman",
    github: "kadikraman",
  },
  location: {
    country: {
      name: "Estonia",
      code: "EE",
    },
    city: "London",
  },
  keywords: [Keyword.GRAPHQL],
  type: [ContactType.SPEAKER, ContactType.LIGHTNING_TALK],
};

export default person;
