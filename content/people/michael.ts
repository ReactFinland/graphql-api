import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Michael Ficarra",
  about:
    "Distinguished Engineer at Shape Security, part of F5. Mainly interested in creating static analysis tools, working on parsers/compilers, and application security.",
  image: {
    url: "people/michael.jpeg",
  },
  social: {
    homepage: "https://justgrahamthings.tumblr.com/",
    mastodon: "https://mastodon.social/@michaelficarra", // This has to be a whole link
    twitter: "smooshMap", // Handle without @ is enough
    github: "michaelficarra",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "mficarra",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Denver",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
