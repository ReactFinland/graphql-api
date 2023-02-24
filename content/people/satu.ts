import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Satu Lapinlampi",
  about: "CEO at Hiottu Oy",
  image: {
    url: "people/satu.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "SatuLap", // Handle without @ is enough
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "satulapinlampi",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Oulu",
  },
  tagline: "Leads a growing small business",
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
