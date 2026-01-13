import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Anastasiia Zvenigorodskaia",
  about:
    "I’ve spent over 13 years in tech: first as a developer, then as a co-founder and COO of a growing IT company. Now, I help business founders do the same: fix the chaos in operations and finances, build real structure, and grow.",
  image: {
    url: "people/anastasiia.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    bluesky: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "zvenigorodskaia",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "",
      code: "",
    },
    city: "",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
