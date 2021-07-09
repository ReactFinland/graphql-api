import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Juri Strumpflohner",
  about:
    "I've been working as a software developer and architect for 10+ years, with technologies like Java, .Net, Node.js on the desktop, mobile as well as web. Lately I'm mostly focusing on frontend web development with JavaScript, on writing technical articles, teaching and consulting.",
  image: {
    url: "people/juri.jpg",
  },
  social: {
    homepage: "https://juristr.com/",
    twitter: "juristr",
    github: "juristr",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Italy",
      code: "IT",
    },
    city: "",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
