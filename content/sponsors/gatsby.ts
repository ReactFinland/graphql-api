import { Contact } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Gatsby",
  about: "Modern Development, for the Content Web",
  image: {
    url: "sponsors/gatsby.svg",
  },
  social: {
    homepage: "https://www.gatsbyjs.com/",
    github: "gatsbyjs",
    twitter: "gatsbyjs",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "San Francisco",
  },
};

export default sponsor;
