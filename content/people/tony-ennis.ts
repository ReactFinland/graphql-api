import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Tony Ennis",
  about: "Building software teams & mobile apps. Built a bank in Asia.",
  image: {
    url: "people/tony-ennis.jpeg",
  },
  social: {
    homepage: "https://www.tonyennis.com/",
    mastodon: "", // This has to be a whole link
    twitter: "tonyennis", // Handle without @ is enough
    bluesky: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "tonyennis1",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Ireland",
      code: "IE",
    },
    city: "",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
