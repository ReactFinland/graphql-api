import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Glenn Reyes",
  about:
    "Glenn is a front-end Engineer, who builds modern user interfaces and apps with React & GraphQL, loves OSS, co-organizes ReactVienna meetups, and plays JM music on guitar.",
  image: {
    url: "people/glenn.jpg",
  },
  social: {
    homepage: "https://glennreyes.com/",
    twitter: "glnnrys",
    github: "glennreyes",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  keywords: [keywords.GRAPHQL, keywords.GRAPHQLJS],
  type: [ContactType.SPEAKER, ContactType.TALK],
};

export default person;
