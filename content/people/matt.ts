import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Matt Webb",
  about: `Matt Webb is founder of new studio [Acts Not Facts](https://www.actsnotfacts.com). For 20 years he has collaborated with some of the world’s largest firms on design-led product invention using new technology. He is currently manufacturing a clock that tells the time with AI-composed poems ([Poem/1](https://poem.town)).

Previously Matt has run startup accelerators, was co-founder and CEO of pioneering design studio BERG, and in 2004 he co-authored Mind Hacks (translated into seven languages), a pop science dive into cognitive neuroscience.

He writes at [Interconnected](https://interconnected.org) and lives in London.`
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
