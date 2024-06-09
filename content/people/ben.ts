import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Ben Holmes",
  about:
    "Ben is an Astro core maintainer, content creator, and whiteboardist making the web a little better. You'll find him hacking with TypeScript or sharing bite-sized learnings on YouTube as [@bholmesdev](https://www.youtube.com/@bholmesdev).",
  tagline: "Astro senior developer",
  image: {
    url: "people/ben.jpeg",
  },
  social: {
    homepage: "https://wtw.dev/",
    mastodon: "", // This has to be a whole link
    twitter: "BHolmesDev", // Handle without @ is enough
    github: "bholmesdev",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "@bholmesdev",
    devto: "",
    tiktok: "@bholmesdev",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
