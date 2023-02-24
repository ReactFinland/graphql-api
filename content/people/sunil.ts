import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Sunil Pai",
  about:
    "Previously at Cloudflare / Meta / Myntra / Yahoo. Made Glamor. Now building [PartyKit](https://partykit.io/). Plays a blue Les Paul.",
  image: {
    url: "people/sunil.png",
  },
  social: {
    homepage: "https://www.coolcomputerclub.com/",
    twitter: "threepointone",
    github: "threepointone",
    facebook: "",
    medium: "",
    instagram: "threepointone",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Great Britain",
      code: "GB",
    },
    city: "London",
  },
  tagline: "Revolutionizes collaboration with PartyKit",
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
