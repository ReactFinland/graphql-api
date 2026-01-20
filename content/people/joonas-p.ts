import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Joonas Pajunen",
  about:
    "CEO at Fraktio. Builder of Interwebs things. A renaissance man, of sorts.",
  image: {
    url: "people/joonas-p.jpeg",
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
    linkedin: "joonaspajunen",
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
  keywords: [], // [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
