import { ContactType } from "../../server/schema";
import keywords from "../keywords";

export default {
  name: "Johannes Schickling",
  about:
    "Johannes Schickling is the co-founder & CEO of Prisma, a GraphQL-based data layer for modern applications. Johannes is interested in Technology, Developer Tools, Open Source, Startups & Music.",
  aboutShort:
    "Johannes Schickling is the co-founder & CEO of Prisma, a GraphQL-based data layer for modern applications.",
  image: "people/johannes.jpg",
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
