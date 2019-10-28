import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Madalyn Rose Parker",
  about: "",
  image: {
    url: "people/madalyn.jpg",
  },
  social: {
    homepage: "https://madalynparker.com",
    twitter: "madalynrose",
    github: "madalynrose",
    facebook: "",
    medium: "",
    instagram: "madalynrose09",
    linkedin: "madalynparker",
    youtube: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Ann Arbor",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
