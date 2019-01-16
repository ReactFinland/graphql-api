import { Contact } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Hasura",
  about: "Instant Realtime GraphQL on Postgres",
  image: {
    url: "sponsors/hasura.png",
  },
  social: {
    homepage: "https://hasura.io/",
    twitter: "hasurahq",
    github: "hasura",
  },
  location: {
    country: {
      name: "India",
      code: "IN",
    },
    city: "Bangalore",
  },
};

export default sponsor;
