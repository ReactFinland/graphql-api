import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Mohammad Khazali",
  about: "",
  image: {
    url: "people/mo.jpg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "mohammadkhazali",
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
  tagline: "Creates universal design systems",
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
