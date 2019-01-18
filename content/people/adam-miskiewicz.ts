import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Adam Miskiewicz",
  about:
    "Adam Miskiewicz is a software engineer at Airbnb, lover of his two dogs, JavaScript, and GraphQL.",
  image: {
    url: "people/adam.jpg",
  },
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

export default person;
