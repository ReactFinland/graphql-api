import { ContactType } from "../../server/schema";
import keywords from "../keywords";

export default {
  name: "Adam Miskiewicz",
  about:
    "Adam Miskiewicz is a software engineer at Airbnb, lover of his two dogs, JavaScript, and GraphQL.",
  image: "people/adam.jpg",
  social: {
    homepage: "http://www.adammiskiewicz.com/",
    twitter: "skevy",
    github: "skevy",
  },
  location: {
    country: {
      name: "USA",
      code: "US",
    },
    city: "San Francisco",
  },
  keywords: [keywords.GRAPHQL, keywords.GRAPHQLJS],
  type: [ContactType.SPEAKER, ContactType.TALK],
};
