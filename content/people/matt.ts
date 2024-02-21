import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Matt Webb",
  about:
    "Exploring new products through thinking and making via Acts Not Facts, for me and for you too if you like.",
  image: {
    url: "people/matt-webb.jpeg",
  },
  social: {
    homepage: "https://interconnected.org/",
    mastodon: "https://mastodon.social/@genmon", // This has to be a whole link
    twitter: "genmon", // Handle without @ is enough
    github: "genmon",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "genmon",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Great Britain",
      code: "GB",
    },
    city: "London",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
