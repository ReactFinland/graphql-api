import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Jecelyn Yeen",
  about: "Chrome DevTools at Google. Web debugging and testing.",
  image: {
    url: "people/jec.jpg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "jecfish", // Handle without @ is enough
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "jecfish",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Münich",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
