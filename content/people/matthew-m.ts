import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Matthew Mamonov",
  about:
    "JavaScript nerd, TypeScript adherent, Vue.js expert and Svelte enthusiast. Refactoring maniac, clean code advocate and a trained eye in UI/UX.",
  image: {
    url: "people/matthew-m.jpeg",
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
    linkedin: "matthewmamonov",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Spain",
      code: "ES",
    },
    city: "Gijón",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
