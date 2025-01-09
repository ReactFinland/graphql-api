import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Jecelyn Yeen",
  about: "Chrome DevTools at Google. Web debugging and testing.",
  image: {
    url: "people/jec.jpg",
  },
  social: {
    homepage: "https://jec.fish",
    mastodon: "https://indieweb.social/@jecfish",
    bluesky: "jec.fish",
    twitter: "jecfish",
    github: "jecfish",
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
