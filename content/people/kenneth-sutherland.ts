import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Kenneth Sutherland",
  about:
    "Kenneth Sutherland is a software developer of 20 years. Experienced projects from games consoles, mobile phones, web and desktop applications and along the way worked in tiny start-ups to businesses with 50,000+ staff.",
  image: {
    url: "people/kenneth.jpg",
  },
  social: {
    homepage: "http://www.kennethsutherland.com/",
    twitter: "_delp_",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "flexguru",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Scotland",
      code: "GB-SCT",
    },
    city: "Edinburgh",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
