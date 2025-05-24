import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Rachel-Lee Nabors",
  about: `Rachel-Lee Nabors spent the better part of their career on web standards and opensource and has spearheaded developer education at FAANG and startups, on the React Team, and W3C. Now they work to usher in the future with browser builders and Silicon Valley startups, teaching a new generation of builders that “it's not magic; it's just math.” You can find them drinking tea in London or shadowboxing in San Francisco.`,
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
