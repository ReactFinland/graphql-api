import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Ujjwal Sharma",
  about: "Ujjwal is a Compilers Hacker at Igalia working on TC39 and V8, a Node.js Core Collaborator, a TC39 Delegate and an International Speaker. He loves to talk about standards and about open source software, decentralization, cryptography, JavaScript and web".
  image: {
    url: "people/uj.jpeg",
  },
  social: {
    homepage: "https://ryzokuken.dev/",
    mastodon: "https://mastodon.social/@ryzokuken", // This has to be a whole link
    twitter: "ryzokuken", // Handle without @ is enough
    github: "ryzokuken",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "ryzokuken",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Spain",
      code: "ES",
    },
    city: "A Coruña",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
