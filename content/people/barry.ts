import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Barry Pollard",
  about:
    "Working on making the web faster in the Google Chrome team. Web performance nerd working on the Core Web Vitals initiative helping web developers make their websites faster and better!",
  image: {
    url: "people/barry.jpg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "tunetheweb", // Handle without @ is enough
    github: "tunetheweb",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "tunetheweb",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Ireland",
      code: "IE",
    },
    city: "Cork",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
