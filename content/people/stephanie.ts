import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Stephanie Nemeth",
  about:
    "Senior Software Engineer. Proudly neurodivergent. Spends her free time camping in nature in a self-built off-road campervan as far away from other humans as possible, dreaming about iceland, befriending neighborhood crows, and occasionally building weird wonderful useless things with hardware.",
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
