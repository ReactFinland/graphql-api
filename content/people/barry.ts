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
    homepage: "https://www.tunetheweb.com",
    mastodon: "https://webperf.social/@tunetheweb",
    bluesky: "tunetheweb.com",
    twitter: "tunetheweb",
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
