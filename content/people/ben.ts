import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Ben Holmes",
  about:
    "Core developer of Astro. Frontend developer and designer working with teams to build accessible, compelling web experiences. 4+ years of frontend experience using HTML + CSS, ReactJS, AngularJS, and the Adobe design suite. Also experienced in OOP principles using Java (education) and C# (backend).",
  tagline: "President of whiteboards",
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
