import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Christoffer Niska",
  about:
    "Tech leader with a passion for programming. Head of Tech at @digiaonline. Father of four. Open Source enthusiast. JavaScript Ninja. GraphQL evangelist.",
  image: {
    url: "people/crisu.jpg",
  },
  social: {
    twitter: "Crisu83",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [keywords.GRAPHQL],
  type: [ContactType.SPEAKER, ContactType.LIGHTNING_TALK],
};

export default person;
