import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Vismit Chawla",
  about: "Talent Acquisition Specialist at RELEX Solutions.",
  image: {
    url: "people/vismit.jpg",
  },
  social: {
    homepage: "",
    twitter: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "vismit-chawla",
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
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
