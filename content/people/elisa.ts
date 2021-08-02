import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Elisa Heikura",
  about: "",
  image: {
    url: "people/elisa.jpg",
  },
  social: {
    homepage: "https://koodarikuiskaaja.fi/",
    twitter: "elisaliisa",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "elisa-heikura",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
