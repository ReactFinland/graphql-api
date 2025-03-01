import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Rachel Nabors",
  about:
    "Former React Core team member. Interactive storyteller. Infinite learner. Lightning before the thunder. Author of [Animation at Work](http://bkaprt.com/aaw), Google Dev Expert—Formerly W3C, MSFT. INFJ singleton",
  image: {
    url: "people/rachel.jpeg",
  },
  social: {
    homepage: "http://rachelnabors.com",
    twitter: "rachelnabors",
    github: "rachelnabors",
    bluesky: "nearestnabors.com",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "rachelnabors",
    youtube: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Seattle",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
