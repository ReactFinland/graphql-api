import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Ewa Gasperowicz",
  about:
    "Web developer and front-end engineer at Google with a keen interest in UI technologies and design. In favor of agile project management and user-centric approach. Hard believer in continuous beta, iterations and code refactoring. Enjoying fast-paced environment, self-management and working with smart people. Strong need for development.",
  image: {
    url: "people/ewa.jpg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "devnook", // Handle without @ is enough
    github: "devnook",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "egasperowicz",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Switzerland",
      code: "CH",
    },
    city: "Zürich",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
