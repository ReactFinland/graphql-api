import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Stephanie Nemeth",
  about:
    "Senior Software Engineer. Proudly neurodivergent. Spends her free time camping in nature far away from other humans in a self-built campervan, dreaming about iceland, & befriending crows.",
  image: {
    url: "people/stephanie.jpeg",
  },
  social: {
    homepage: "https://stephanie.lol",
    mastodon: "https://mastodon.social/@steph",
    bluesky: "stephaniecodes.bsky.social",
    twitter: "",
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
