import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Julien Sulpis",
  about: "Tech lead at Zenika.",
  image: {
    url: "people/julien.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "julien-sulpis",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "France",
      code: "FR",
    },
    city: "Villeurbanne",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
