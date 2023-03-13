import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Juha-Matti Santala",
  about: "",
  image: {
    url: "people/juhis.jpeg",
  },
  social: {
    homepage: "https://hamatti.org/",
    mastodon: "https://mastodon.world/@hamatti", // This has to be a whole link
    twitter: "hamatti", // Handle without @ is enough
    github: "hamatti",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "juhamattisantala",
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
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
