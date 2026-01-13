import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Laura Snellman-Junna",
  about:
    "Helping software teams ship faster with AI at Wonna | Crafting early-stage, secure, and ethical AI products to help people grow, succeed, and thrive / Founder / Consultant / M.Sc. in CS.",
  image: {
    url: "people/TODO.jpeg",
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
    linkedin: "lsnellma",
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
