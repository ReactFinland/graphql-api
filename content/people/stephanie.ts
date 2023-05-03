import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Stephanie Nemeth",
  about: "Creating weird wonderful useless things with Raspberry Pi, Arduinos and LEDs. Engineer @ GitHub",
  image: {
    url: "people/stephanie.jpg",
  },
  social: {
    homepage: "https://stephanie.lol",
    mastodon: "https://mastodon.social/@steph",
    twitter: "stephaniecodes",
    github: "traumverloren",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
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
