import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Miško Hevery",
  about:
    "CTO at @builderio, creator of @QwikDev, @angular, @angularjs, co-creator of #karmajs",
  image: {
    url: "people/misko.jpeg",
  },
  social: {
    homepage: "http://misko.hevery.com/",
    twitter: "mhevery",
    github: "mhevery",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Saratoga",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
