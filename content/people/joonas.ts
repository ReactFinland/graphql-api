import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Joonas Kykkänen",
  about:
    "Tech lead at Wunderdog. Consultant by day, board game nerd by night. Always chasing clarity, impact, and the mythical sweet spot of the iron triangle.",
  image: {
    url: "people/joonas.jpg",
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
    linkedin: "joonas-kykkänen-300b2ba4",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "",
      code: "",
    },
    city: "",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
