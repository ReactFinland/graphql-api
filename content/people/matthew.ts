import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Matthew Phillips",
  about: "Co-creator of Astro.",
  image: {
    url: "people/matthew.jpeg",
  },
  social: {
    homepage: "https://matthewphillips.info/",
    mastodon: "", // This has to be a whole link
    twitter: "matthewcp", // Handle without @ is enough
    github: "matthewp",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Louisville",
  },
  tagline: "Creator of Astro",
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
