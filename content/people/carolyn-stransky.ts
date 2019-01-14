import { ContactType } from "../../server/schema";
import keywords from "../keywords";

export default {
  name: "Carolyn Stransky",
  about:
    "Carolyn Stransky is a frontend developer and former technical writer based in Berlin. She currently works at Blacklane and teaches at ReDI School of Digital Integration. You’ll usually find her looking at memes or taking selfies in the nearest restroom.",
  image: "people/carolyn.jpg",
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
  keywords: [keywords.GRAPHQL, keywords.GRAPHQLJS],
  type: [ContactType.SPEAKER, ContactType.TALK],
};
