import { Contact } from "../../server/schema/Contact";

const person: Contact = {
  name: "Elsa Nyrhinen",
  about: "Software developer at Wunderdog",
  image: {
    url: "people/elsa.jpeg",
  },
  social: {
    homepage: "",
    twitter: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "elsanyrhinen",
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
  keywords: [],
  type: [],
};

export default person;
