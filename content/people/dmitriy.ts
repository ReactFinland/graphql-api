import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Dmitriy Akulov",
  about:
    "Building fast global infrastructure. Creator of [jsDelivr](https://www.jsdelivr.com/) - Product Director at Gcore. Ex-Cloudflare. Twice a startup founder.",
  image: {
    url: "people/dmitriy.jpeg",
  },
  social: {
    homepage: "https://dakulov.com/",
    mastodon: "", // This has to be a whole link
    twitter: "jimaek", // Handle without @ is enough
    github: "jimaek",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "dakulov",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Poland",
      code: "PL",
    },
    city: "Krakow",
  },
  tagline: "Creator of jsDelivr",
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
