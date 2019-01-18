import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Michel Weststrate",
  about:
    "Full-stack tech lead and open source evangelist at Mendix. Author of MobX, MobX-State-Tree and Immer. On a quest to make programming as natural as possible.",
  image: {
    url: "people/michel.jpg",
  },
  social: {
    homepage: "https://medium.com/@mweststrate",
    medium: "@mweststrate",
    twitter: "mweststrate",
    github: "mweststrate",
    linkedin: "michel-weststrate-3558463",
  },
  location: {
    country: {
      name: "Netherlands",
      code: "NL",
    },
    city: "Amsterdam",
  },
  keywords: [
    keywords.IMMER,
    keywords.MOBX,
    keywords.MOBX_STATE_TREE,
    keywords.REACT,
    keywords.STATE_MANAGEMENT,
  ],
  type: [ContactType.SPEAKER],
};

export default person;
