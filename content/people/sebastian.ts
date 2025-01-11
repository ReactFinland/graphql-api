import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Sebastian Obel",
  about:
    `Engineer for Theatre and Event Technology & Artist, Collector of Dys's: Dyslexia, Dyscalculia, Dysgraphia & ADHD. Hyperfocuses: Cable Management (long-standing), Hull Design of Icebreaker Ships (current)
.`,
  image: {
    url: "people/sebastian.jpeg",
  },
  social: {
    homepage: "https://bainom.github.io",
    mastodon: "",
    twitter: "",
    github: "bainom",
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
