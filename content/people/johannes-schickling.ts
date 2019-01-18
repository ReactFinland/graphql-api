import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Johannes Schickling",
  about:
    "Johannes Schickling is the co-founder & CEO of Prisma, a GraphQL-based data layer for modern applications. Johannes is interested in Technology, Developer Tools, Open Source, Startups & Music.",
  aboutShort:
    "Johannes Schickling is the co-founder & CEO of Prisma, a GraphQL-based data layer for modern applications.",
  image: {
    url: "people/johannes.jpg",
  },
  social: {
    homepage: "http://schickling.me/",
    twitter: "schickling",
    github: "schickling",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [keywords.GRAPHQL],
  type: [ContactType.SPEAKER, ContactType.LIGHTNING_TALK],
};

export default person;
