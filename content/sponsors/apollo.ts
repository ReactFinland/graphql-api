import { Contact } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Apollo",
  about:
    "We build Apollo Client, Engine, and Server to help you adopt GraphQL.",
  image: {
    url: "sponsors/apollo.svg",
  },
  social: {
    homepage: "https://www.apollographql.com/",
    twitter: "apollographql",
    github: "apollographql",
  },
  location: {
    country: {
      name: "USA",
      code: "US",
    },
    city: "San Francisco",
  },
};

export default sponsor;
