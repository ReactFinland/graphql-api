import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Carolyn Stransky",
  about:
    "Carolyn Stransky is a frontend developer and former technical writer based in Berlin. She currently works at Blacklane and teaches at ReDI School of Digital Integration. You’ll usually find her looking at memes or taking selfies in the nearest restroom.",
  image: {
    url: "people/carolyn.jpg",
  },
  social: {
    twitter: "carolstran",
    github: "carolstran",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [Keyword.GRAPHQL, Keyword.GRAPHQLJS],
  type: [ContactType.SPEAKER, ContactType.TALK],
};

export default person;
