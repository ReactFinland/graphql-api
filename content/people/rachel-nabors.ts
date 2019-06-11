import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Rachel Nabors",
  about:
    "React Core. Interactive storyteller. Infinite learner. Lightning before the thunder. Author of [Animation at Work](http://bkaprt.com/aaw), Google Dev Expert—Formerly W3C, MSFT. INFJ singleton",
  image: {
    url: "people/rachel.png",
  },
  social: {
    homepage: "http://rachelnabors.com",
    twitter: "rachelnabors",
    github: "rachelnabors",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  location: {
    country: {
      name: "Great Britain",
      code: "GB",
    },
    city: "London",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
