import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Charlie Gerard",
  about:
    "Senior dev. Also a Google Developer Expert and published author. Very much into creative technology and HCI, mostly in JavaScript.",
  image: {
    url: "people/charlie.jpeg",
  },
  social: {
    homepage: "https://charliegerard.dev/",
    twitter: "devdevcharlie",
    github: "charliegerard",
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
    city: "Seattle",
  },
  tagline: "Hardware and JavaScript applied",
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
