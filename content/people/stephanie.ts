import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Stephanie Nemeth",
  about: "Creates weird wonderful useless things with Arduinos and LEDs.",
  image: {
    url: "people/stephanie.jpg",
  },
  social: {
    homepage: "",
    mastodon: "https://mastodon.social/@steph",
    twitter: "stephaniecodes",
    github: "traumverloren",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "stephanienemeth",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
