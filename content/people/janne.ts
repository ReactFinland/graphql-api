import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Janne Kalliola",
  about: "CGO at Exove",
  image: {
    url: "people/janne.jpeg",
  },
  social: {
    homepage: "https://www.kallio.la/",
    mastodon: "", // This has to be a whole link
    twitter: "plastic", // Handle without @ is enough
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "jannekalliola",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  tagline: "Makes your code green",
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
