import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Alex Booker",
  about:
    "Building [Mastra](https://mastra.ai/) and helping you to code AI agents.",
  image: {
    url: "people/alex-booker.jpeg",
  },
  social: {
    homepage: "https://booker.codes/",
    mastodon: "", // This has to be a whole link
    twitter: "bookercodes", // Handle without @ is enough
    bluesky: "bookercodes.bsky.social",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "bookercodes",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "United Kingdom",
      code: "UK",
    },
    city: "London",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
